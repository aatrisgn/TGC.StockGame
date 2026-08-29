using Microsoft.Extensions.Logging;
using TGC.RegardedStonks.Application.Repositories;

namespace TGC.RegardedStonks.Infrastructure.Seeding;

internal sealed class TemplateStockCompanySeeder
{
	private readonly ITemplateStockCompanyRepository _repository;
	private readonly ITemplateStockCompanyReadOnlyRepository _readOnlyRepository;
	private readonly ILogger<TemplateStockCompanySeeder> _logger;

	public TemplateStockCompanySeeder(
		ITemplateStockCompanyRepository repository,
		ITemplateStockCompanyReadOnlyRepository readOnlyRepository,
		ILogger<TemplateStockCompanySeeder> logger)
	{
		_repository = repository;
		_readOnlyRepository = readOnlyRepository;
		_logger = logger;
	}

	public async Task SeedAsync(CancellationToken cancellationToken = default)
	{
		var existingNames = await _readOnlyRepository.GetExistingNamesAsync(cancellationToken);
		var missing = TemplateStockCompanySeedData.Companies
			.Where(company => !existingNames.Contains(company.Name))
			.ToList();

		if (missing.Count == 0)
		{
			_logger.LogInformation("Template stock company seed: all {Total} companies already present.", TemplateStockCompanySeedData.Companies.Count);
			return;
		}

		foreach (var company in missing)
		{
			await _repository.AddAsync(company.Name, company.ShortName, company.Description, (decimal)company.Price, company.AvailableStocks, createdBy: Guid.Empty, cancellationToken: cancellationToken);
		}

		await _repository.SaveChangesAsync(cancellationToken);
		_logger.LogInformation(
			"Template stock company seed: inserted {Inserted} new companies ({Existing} already existed).",
			missing.Count,
			existingNames.Count);
	}
}
