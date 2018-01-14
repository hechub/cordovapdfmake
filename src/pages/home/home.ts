import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { FileOpener } from '@ionic-native/file-opener';
import { File } from '@ionic-native/file';
declare let pdfMake: any;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public inApp: InAppBrowser, public fileOpener: FileOpener, public file: File) {

  }

  testPdf() {
    console.log('PDF IT');

    var dd = {
      content: [{
        text: 'AVISO DE CONFIRMAÇÃO DE CONTRATAÇÃO DE MICROCRÉDITO',
        style: 'header'
      },
      {
        columns: [
          {
            width: '*',
            style: 'table',
            table: {
              widths: ['*'],
              body: [
                ['Cliente: MARIA DE FATIMA BIRIBA DOS SANTOS']
              ]
            },
          },
          {
            width: 'auto',
            style: 'table',
            table: {
              widths: ['auto'],
              body: [
                ['CPF: 311.028.165-15']
              ]
            },
          }
        ]
      },
      {
        style: 'simpleText',
        text: ['Prezado Cliente,\n',
          'Confirmamos a contratação do Microcrédito junto ao Banco Santander (Brasil) S.A.\n',
          'Informamos que os valores e dados finais da operação estão indicados abaixo, e integram o Contrato de Empréstimo.']
      },
      {
        style: 'subHeader',
        text: ['Quadro I - Condições do Empréstimo']
      },
      {
        columns: [
          {
            style: 'table',
            table: {
              widths: ['*'],
              body: [
                ['Contrato nº 00000000000000000000']
              ]
            },
          },
          {
            style: 'table',
            table: {
              widths: ['*'],
              body: [
                ['Data de Emissão: 21/06/2017']
              ]
            },
          }
        ]
      },
      {
        style: 'subTable',
        table: {
          widths: ['*'],
          body: [
            [
              [
                {
                  text: 'Custo Efetivo Total (CET): 3,06% ao mês 44,29% ao ano',
                  style: 'nestedHeader'
                },

                {
                  layout: 'noBorders',
                  style: 'nestedTable',
                  table: {
                    widths: ['*', 'auto', 'auto'],
                    body: [
                      ['Valor total financiado:', 'R$ 7.725,00', '100,00%'],
                      ['Tarifa de abertura de Crédito (TAC):', 'R$ 225,00', '2,91%'],
                      ['Imposto sobre Operações Financeiras (IOF):', 'R$ 0,00', '0%'],
                      ['Valor Total Liberado:', 'R$ 7.500,00', '97,09%']
                    ]
                  },
                }
              ],
            ]
          ]
        },
      },
      {
        columns: [
          {
            width: '*',
            style: 'subTable',
            table: {
              widths: ['*'],
              body: [
                ['Quantidade de Parcelas 06']
              ]
            },
          },
          {
            width: '*',
            style: 'subTable',
            table: {
              widths: ['*'],
              body: [
                ['Valor da Parcela R$ 1.424,56']
              ]
            },
          },
          {
            style: 'subTable',
            table: {
              widths: ['*'],
              body: [
                ['Total a pagar: R$ 7.725,00']
              ]
            },
          }
        ]
      },
      {
        columns: [
          {
            style: 'subTable',
            table: {
              widths: ['*'],
              body: [
                ['Vencimento da 1ª Parcela: 15/08/22017']
              ]
            },
          },
          {
            style: 'subTable',
            table: {
              widths: ['*'],
              body: [
                ['Vencimento da Última Parcela: 15/02/2018']
              ]
            },
          }
        ]
      },
      {
        columns: [
          {
            style: 'subTable',
            table: {
              widths: ['*'],
              body: [
                ['Data de Liberação do Valor ao Cliente/Coordenardo do Grupo: 21/06/2017']
              ]
            },
          }
        ]
      },
      {
        style: 'subTable',
        table: {
          widths: ['*'],
          body: [
            [
              [
                {
                  text: 'Forma de Entrega do Valor',
                  style: 'nestedHeader'
                },
                {
                  columns: [
                    {
                      width: 'auto',
                      style: 'subTable',
                      table: {
                        widths: ['auto'],
                        body: [
                          [{
                            text: ' ',
                            style: 'boldOption'
                          },
                          ]
                        ]
                      },
                    },
                    {
                      width: 'auto',
                      style: 'subTable',
                      layout: 'noBorders',
                      table: {
                        widths: ['auto'],
                        body: [
                          [{
                            text: 'Ordem de Pagamento',
                            style: 'boldOption'
                          },
                          ]
                        ]
                      },
                    },
                    {
                      width: 'auto',
                      layout: 'noBorders',
                      style: 'subTable',
                      table: {
                        widths: ['*'],
                        body: [
                          [{
                            text: 'OU',
                            style: 'boldOption'
                          },
                          ]
                        ]
                      },
                    },
                    {
                      width: 'auto',
                      style: 'subTable',
                      table: {
                        widths: ['auto'],
                        body: [
                          [{
                            text: ' ',
                            style: 'boldOption'
                          },
                          ]
                        ]
                      },
                    },
                    {
                      style: 'subTable',
                      layout: 'noBorders',
                      table: {
                        widths: ['auto'],
                        body: [
                          [{
                            text: 'C.C/DOC/TED: Banco: 0033 Ag.: 3026 C/C',
                            style: 'boldOption'
                          },]
                        ]
                      },
                    }
                  ]
                },
              ],
            ]
          ]
        },
      },
      {
        style: 'subHeader',
        text: ['Quadro II - Condições Grupo Solidário']
      },
      {
        columns: [
          {
            style: 'subTable',
            table: {
              widths: ['*'],
              body: [
                ['Nome do Grupo: 0000000000000000000000000']
              ]
            },
          }
        ]
      },
      {
        columns: [
          {
            width: '70%',
            style: 'subTable',
            table: {
              widths: ['*'],
              heights: ['10'],
              body: [
                ['Cliente/Coordenador do Grupo: MARIA DE FATIMA BIRIBA DOS SANTOS'],
                [' ']
              ]
            },
          },
          {
            width: '30%',
            style: 'subTable',
            table: {
              widths: ['*'],
              body: [
                ['Valor Liberado: R$ 3.000,00'],
                ['Valor da Parcela: R$ 569,82']
              ]
            },
          }
        ]
      },
      {
        columns: [
          {
            width: '70%',
            style: 'subTable',
            table: {
              widths: ['*'],
              heights: ['10'],
              body: [
                ['Devedor Solidário 1: MARIA JOSE COSTA DOS SANTOS'],
                [' ']
              ]
            },
          },
          {
            width: '30%',
            style: 'subTable',
            table: {
              widths: ['*'],
              body: [
                ['Valor Liberado: R$ 3.000,00'],
                ['Valor da Parcela: R$ 569,82']
              ]
            },
          }
        ]
      },
      {
        columns: [
          {
            width: '70%',
            style: 'subTable',
            table: {
              widths: ['*'],
              heights: ['10'],
              body: [
                ['Devedor Solidário 2: PAULA CRISTINA LIMA DOS SANTOS'],
                [' ']
              ]
            },
          },
          {
            width: '30%',
            style: 'subTable',
            table: {
              widths: ['*'],
              body: [
                ['Valor Liberado: R$ 3.000,00'],
                ['Valor da Parcela: R$ 569,82']
              ]
            },
          }
        ]
      },
      {
        columns: [
          {
            width: '70%',
            style: 'subTable',
            table: {
              widths: ['*'],
              heights: ['10'],
              body: [
                ['Devedor Solidário 3: '],
                [' ']
              ]
            },
          },
          {
            width: '30%',
            style: 'subTable',
            table: {
              widths: ['*'],
              body: [
                ['Valor Liberado:'],
                ['Valor da Parcela:']
              ]
            },
          }
        ]
      },
      {
        text: 'Atenciosamento,',
        style: 'footer'
      },
      {
        text: 'Banco Santander (Brasil) S.A.',
        style: 'footer',
        bold: true
      },
      {
        columns: [
          {
            style: 'footerInfo',
            width: '20%',
            text: 'De acordo: CLIENTE'
          },
          {
            style: 'footerInfo',
            width: '30%',
            text: ['_________________________________']
          },
          {
            style: 'footerInfo',
            width: '22%',
            text: ['De acordo FIADOR']
          },
          {
            style: 'footerInfo',
            width: '28%',
            text: ['_______________________________']
          },
        ],
        columnGap: 2
      },
      {
        columns: [
          {
            style: 'footerInfo',
            width: '50%',
            text: ' '
          },
          {
            style: 'footerInfo',
            width: '22%',
            margin: [2, 15, 0, 0],
            text: ['De acordo CÔNJUGUE']
          },
          {
            style: 'footerInfo',
            width: '28%',
            text: ['_______________________________']
          },
        ],
        columnGap: 2
      },
      {
        columns: [
          {
            style: 'footerInfo',
            width: '20%',
            text: 'Local e Data'
          },
          {
            style: 'footerInfo',
            width: 'auto',
            text: ['_____________________________________________________, 11/01/2018']
          }
        ],
        columnGap: 2
      },
      {
        columns: [
          {
            style: 'footerInfo',
            width: '20%',
            text: 'TESTEMUNHAS'
          },
          {
            style: 'footerInfo',
            width: '40%',
            text: ['________________________________________ \nNome:\nCPF:\nRG:']
          },
          {
            style: 'footerInfo',
            width: '40%',
            text: ['________________________________________ \nNome:\nCPF:\nRG:']
          }
        ],
        columnGap: 2
      },
      {
        text: 'Central de Atendimento Santander: 3553-4080 (Capitais e Regiões Metropolitanas) e 0800 723 4499 (Demais Localidades). Serviço de Apoio ao Consumidor - SAC 0800 762 7777. Ouvidoria 0800 726 0322 (Atende também deficientes auditivos e de fala).',
        fontSize: 8,
        alignment: 'left',
        margin: [0, 10, 0, 0]
      },
      ],
      styles: {
        header: {
          fontSize: 10,
          bold: true,
          margin: [0, 0, 0, 20],
          alignment: 'center'
        },
        footer: {
          fontSize: 9,
          alignment: 'center',
          margin: [0, 10, 0, 0]
        },
        footerInfo: {
          fontSize: 10,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        table: {
          margin: [0, 2, 1, 5],
          fontSize: 10
        },
        subTable: {
          margin: [0, 2, 1, 0],
          fontSize: 10
        },
        nestedTable: {
          margin: [0, 2, 0, 0]
        },
        simpleText: {
          fontSize: 9,
          margin: [2, 0, 0, 0]
        },
        subHeader: {
          fontSize: 10,
          bold: true,
          margin: [2, 5, 0, 0]

        },
        nestedHeader: {
          fontSize: 10,
          bold: true,
          margin: [0, 5, 0, 5]
        },
        boldOption: {
          bold: true,
          margin: [5, 0, 15, 0]
        },
        extraMargin: {
          margin: [0, 0, 0, 0]
        }

      },
    }

    

    console.log('PDF', pdfMake.createPdf(dd));
    pdfMake.createPdf(dd).getDataUrl((res)=>{
      console.log('BASE¨64',res);
      fetch(res,
        {
          method: "GET"
        }).then(res => res.blob()).then(blob => {
          this.file.writeFile(this.file.externalApplicationStorageDirectory, 'CCM.pdf', blob, { replace: true }).then(res => {
            this.fileOpener.open(
              res.toInternalURL(),
              'application/pdf'
            ).then((res) => {
              console.log('res');
            }).catch(err => {
              console.log(err);
            });
          }).catch(err => {
                console.log(err);     
     });
        }).catch(err => {
               console.log(err);
        });
    });
    // pdfMake.createPdf(dd).getDataUrl((res)=>{
    //   console.log('URL', res);
    //   //his.inApp.create(res);
    //   // this.fileOpener.open(res, 'application/pdf')
    //   // .then(() => console.log('File is opened'))
    //   // .catch(e => console.log('Error openening file', e));
    // });
    // console.log('download',pdfMake.createPdf(dd).download());
  }

}
