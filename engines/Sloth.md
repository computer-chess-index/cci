# Engine: Sloth

Author: William Sjolund

Home: https://github.com/Williamguttn/Sloth

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2026-11-03 | 2967<sub>(+241) | 3306<sub>(+231) | 3438<sub>(+245) |  |
| 2.4 | 2026-10-09 | 2726<sub>(+273) | 3075<sub>(+183) | 3193<sub>(+177) |  |
| 2.2 | 2026-08-28 | 2453 | 2892 | 3016 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2026-11-03 | 3163<sub>(+329) | 3429<sub>(+252) | 3521<sub>(+307) |  |
| 2.4 | 2026-10-09 | 2834<sub>(+181) | 3177<sub>(+139) | 3214<sub>(+114) |  |
| 2.2 | 2026-08-28 | 2653 | 3038 | 3100 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3 | 2026-09-22 | 2579<sub>(+36) | 2962<sub>(+81) | 3021<sub>(+39) |  |
| 2.2 | 2026-08-28 | 2543 | 2881 | 2982 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Sloth+<version>&body=###%20Engine%20name%0ASloth%0A%0A###%20Version%0A2.3" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-11-07 05:42:28

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "2.4", "2.5"]
  y-axis "Elo Rating" 2400 --> 3600
  line "E1: STC (8.0+0.08s)" [2453, 2726, 2967]
  line "E1: LTC (60.0+0.60s)" [2892, 3075, 3306]
  line "E1: VLTC (2m24s+1.12s)" [3016, 3193, 3438]
  line "P1: STC (8.0+0.08s)" [2653, 2834, 3163]
  line "P1: LTC (60.0+0.60s)" [3038, 3177, 3429]
  line "P1: VLTC (2m24s+1.12s)" [3100, 3214, 3521]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "2.3"]
  y-axis "Elo Rating" 2500 --> 3100
  line "T1: STC (8.0+0.08s)" [2543, 2579]
  line "T1: LTC (60.0+0.60s)" [2881, 2962]
  line "T1: VLTC (2m24s+1.12s)" [2982, 3021]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3521 | 48 | 116 | 55% | 3480 | 63% |
|  |  | E1 | 3438 | 34 | 236 | 51% | 3425 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3429 | 41 | 156 | 52% | 3414 | 63% |
|  |  | E1 | 3306 | 31 | 288 | 52% | 3287 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3163 | 40 | 178 | 53% | 3135 | 49% |
|  |  | E1 | 2967 | 41 | 196 | 53% | 2934 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3214 | 41 | 162 | 49% | 3221 | 56% |
|  |  | E1 | 3193 | 32 | 276 | 51% | 3187 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3177 | 39 | 188 | 51% | 3175 | 45% |
|  |  | E1 | 3075 | 33 | 274 | 51% | 3069 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2834 | 37 | 224 | 54% | 2801 | 42% |
|  |  | E1 | 2726 | 34 | 286 | 52% | 2703 | 34% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3021 | 36 | 218 | 51% | 3011 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2962 | 37 | 210 | 51% | 2958 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2579 | 42 | 190 | 48% | 2596 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3100 | 38 | 208 | 47% | 3114 | 47% |
|  |  | E1 | 3016 | 33 | 282 | 47% | 3039 | 43% |
|  |  | T1 | 2982 | 33 | 280 | 51% | 2965 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2892 | 34 | 274 | 46% | 2916 | 39% |
|  |  | T1 | 2881 | 35 | 246 | 53% | 2853 | 46% |
|  |  | P1 | 3038 | 39 | 194 | 49% | 3043 | 46% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2453 | 35 | 280 | 41% | 2541 | 29% |
|  |  | T1 | 2543 | 33 | 304 | 48% | 2560 | 31% |
|  |  | P1 | 2653 | 44 | 180 | 50% | 2650 | 26% |