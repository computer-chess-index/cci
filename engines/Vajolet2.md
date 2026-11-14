# Engine: Vajolet2

Author: Marco Belli

Home: https://github.com/elcabesa/vajolet

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-05-17 | 2746<sub>(-28) | 3125<sub>(+113) | 3198<sub>(+20) |  |
| 3.1 | 2026-04-03 | 2774 | 3012 | 3178 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-05-17 | 2747<sub>(-21) | 3081<sub>(+131) | 3155<sub>(-34) |  |
| 3.1 | 2026-04-03 | 2768 | 2950 | 3189 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-05-17 | 2865<sub>(+29) | 3137<sub>(+78) | 3186<sub>(+47) |  |
| 3.1 | 2026-04-03 | 2836<sub>(+100) | 3059<sub>(+58) | 3139<sub>(+62) |  |
| 3.0 | 2025-12-21 | 2736 | 3001 | 3077 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Vajolet2+<version>&body=###%20Engine%20name%0AVajolet2%0A%0A###%20Version%0A3.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-14 05:43:44

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.1", "3.2"]
  y-axis "Elo Rating" 2700 --> 3200
  line "E1: STC (8.0+0.08s)" [2774, 2746]
  line "E1: LTC (60.0+0.60s)" [3012, 3125]
  line "E1: VLTC (2m24s+1.12s)" [3178, 3198]
  line "P1: STC (8.0+0.08s)" [2768, 2747]
  line "P1: LTC (60.0+0.60s)" [2950, 3081]
  line "P1: VLTC (2m24s+1.12s)" [3189, 3155]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "3.1", "3.2"]
  y-axis "Elo Rating" 2700 --> 3200
  line "T1: STC (8.0+0.08s)" [2736, 2836, 2865]
  line "T1: LTC (60.0+0.60s)" [3001, 3059, 3137]
  line "T1: VLTC (2m24s+1.12s)" [3077, 3139, 3186]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3155 | 32 | 276 | 50% | 3151 | 55% |
|  |  | E1 | 3198 | 27 | 423 | 53% | 3154 | 46% |
|  |  | T1 | 3186 | 27 | 386 | 49% | 3191 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3081 | 33 | 278 | 51% | 3050 | 42% |
|  |  | E1 | 3125 | 28 | 402 | 54% | 3056 | 40% |
|  |  | T1 | 3137 | 27 | 400 | 51% | 3132 | 50% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2747 | 34 | 282 | 46% | 2789 | 33% |
|  |  | E1 | 2746 | 27 | 448 | 45% | 2773 | 32% |
|  |  | T1 | 2865 | 25 | 492 | 50% | 2867 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3178 | 98 | 32 | 42% | 3256 | 41% |
|  |  | T1 | 3139 | 29 | 352 | 50% | 3140 | 47% |
|  |  | P1 | 3189 | 113 | 20 | 43% | 3248 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3059 | 27 | 406 | 50% | 3056 | 43% |
|  |  | P1 | 2950 | 102 | 28 | 54% | 2893 | 43% |
|  |  | E1 | 3012 | 86 | 40 | 40% | 3093 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2836 | 28 | 384 | 50% | 2832 | 41% |
|  |  | P1 | 2768 | 121 | 32 | 48% | 2664 | 16% |
|  |  | E1 | 2774 | 94 | 44 | 52% | 2638 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3077 | 31 | 318 | 52% | 3059 | 46% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3001 | 29 | 344 | 52% | 2981 | 44% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2736 | 29 | 386 | 52% | 2705 | 37% |