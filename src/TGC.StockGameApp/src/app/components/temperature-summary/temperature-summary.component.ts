import { Component } from '@angular/core';
import { ApexOptions, NgApexchartsModule } from 'ng-apexcharts';
import { ChartDB } from 'src/app/fack-db/chartData';
import { GameClient, GameResponse } from 'src/app/generated/autogenerated-client';
import { CurrentGameState } from 'src/app/services/CurrentGameState.service';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-temperature-summary',
  standalone: true,
  imports: [NgApexchartsModule, SharedModule],
  providers: [GameClient],
  templateUrl: './temperature-summary.component.html',
  styleUrl: './temperature-summary.component.scss'
})

export class TemperatureSummaryComponent {
  area1CAC: ApexOptions;
  chartDB: any;
  gameData:GameResponse | undefined;
  currentGameId:string;

  constructor(private currentStateService:CurrentGameState, private gameClient:GameClient){
    this.currentGameId = currentStateService.getGameId();
    this.area1CAC = TemperatureSummaryComponent.localData;
  }

  ngOnInit(){
    if(this.currentGameId != ""){
      this.gameClient.getGameById(this.currentGameId).subscribe(response => {
        this.gameData = response;

        TemperatureSummaryComponent.localData.series = response.stocks?.map(d => {
          return {
            name: d.assetName,
            data: d.assetData?.map(innerData =>{ return innerData.priceIndex})
          }
        })
      })
    }
  }

  static localData:any = {
    chart: {
      height: 350,
      type: 'line'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    colors: ['#FF6F61', '#6A67CE', '#FFD66B', '#34C759', '#FF9AA2', '#3AA7A3'],
    series: [
      {
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      },
      {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }
    ]
  };
}
