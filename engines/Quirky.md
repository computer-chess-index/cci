# Engine: Quirky

Author: Anton Kernozhitsky

Home: https://github.com/Wind-Eagle/Quirky

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-05-16 | 3012<sub>(+109) | 3228<sub>(+65) | 3248<sub>(+42) |  |
| 2.1 | 2025-11-25 | 2903 | 3163 | 3206 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-05-16 | 3031<sub>(+124) | 3233<sub>(+116) | 3297<sub>(+77) |  |
| 2.1 | 2025-11-25 | 2907 | 3117 | 3220 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-05-16 | 911<sub>(-2055) | 2109<sub>(-1091) | 1223<sub>(-2040) |  |
| 2.1 | 2025-11-25 | 2966 | 3200 | 3263 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Quirky+<version>&body=###%20Engine%20name%0AQuirky%0A%0A###%20Version%0A3.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-24 05:41:51

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0"]
  y-axis "Elo Rating" 2900 --> 3300
  line "E1: STC (8.0+0.08s)" [2903, 3012]
  line "E1: LTC (60.0+0.60s)" [3163, 3228]
  line "E1: VLTC (2m24s+1.12s)" [3206, 3248]
  line "P1: STC (8.0+0.08s)" [2907, 3031]
  line "P1: LTC (60.0+0.60s)" [3117, 3233]
  line "P1: VLTC (2m24s+1.12s)" [3220, 3297]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0"]
  y-axis "Elo Rating" 900 --> 3300
  line "T1: STC (8.0+0.08s)" [2966, 911]
  line "T1: LTC (60.0+0.60s)" [3200, 2109]
  line "T1: VLTC (2m24s+1.12s)" [3263, 1223]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1223 | 21 | 1660 | 25% | 1688 | 3% |
|  |  | P1 | 3297 | 29 | 346 | 56% | 3147 | 53% |
|  |  | E1 | 3248 | 24 | 538 | 53% | 3213 | 44% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2109 | 23 | 928 | 44% | 2203 | 2% |
|  |  | P1 | 3233 | 29 | 340 | 54% | 3183 | 53% |
|  |  | E1 | 3228 | 23 | 576 | 57% | 3125 | 48% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 911 | 34 | 472 | 55% | 941 | 15% |
|  |  | P1 | 3031 | 25 | 578 | 65% | 2614 | 41% |
|  |  | E1 | 3012 | 25 | 632 | 65% | 2531 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3263 | 22 | 564 | 54% | 3235 | 59% |
|  |  | P1 | 3220 | 64 | 72 | 60% | 3116 | 54% |
|  |  | E1 | 3206 | 57 | 92 | 53% | 3123 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3200 | 25 | 438 | 52% | 3181 | 63% |
|  |  | P1 | 3117 | 65 | 78 | 62% | 2961 | 41% |
|  |  | E1 | 3163 | 53 | 100 | 52% | 3151 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2966 | 23 | 552 | 50% | 2947 | 44% |
|  |  | P1 | 2907 | 64 | 84 | 51% | 2838 | 40% |
|  |  | E1 | 2903 | 62 | 100 | 63% | 2684 | 30% |