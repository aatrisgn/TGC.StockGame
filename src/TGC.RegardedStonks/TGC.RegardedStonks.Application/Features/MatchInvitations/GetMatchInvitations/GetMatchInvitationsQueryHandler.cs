using TGC.Communication.cqrs;

namespace TGC.RegardedStonks.Application.Features.MatchInvitations.GetMatchInvitations;

public class GetMatchInvitationsQueryHandler : BaseQueryHandler<GetMatchInvitationsQuery, GetMatchInvitationsQueryRespone>, IQueryHandler 
{
	public Task<IResult<IQueryResponse>> Handle<TQuery>(TQuery query) where TQuery : IQuery
	{
		throw new NotImplementedException();
	}
}