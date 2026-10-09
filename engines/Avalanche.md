# Engine: Avalanche

Author: Yinuo Huang

Home: https://github.com/SnowballSH/Avalanche

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-08-08 | 3056 | 3357 | 3402 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-08-08 | 3326 | 3576 | 3623 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-08-08 | 3194<sub>(+289) | 3395<sub>(+194) | 3448<sub>(+211) |  |
| 3.0.0 | 2026-06-25 | 2905 | 3201 | 3237 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Avalanche+<version>&body=###%20Engine%20name%0AAvalanche%0A%0A###%20Version%0A4.0.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-09 14:09:00

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0"]
  y-axis "Elo Rating" 2900 --> 3500
  line "" [2905, 3194]
  line "STC (8.0+0.08s)" [2905, 3194]
  line "LTC (60.0+0.60s)" [3201, 3395]
  line "" [3237, 3448]
  line "VLTC (2m24s+1.12s)" [3237, 3448]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3623 | 38 | 166 | 48% | 3633 | 80% |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3402 | 33 | 228 | 49% | 3409 | 75% |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3448 | 26 | 370 | 52% | 3432 | 79% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3576 | 39 | 160 | 50% | 3573 | 73% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3357 | 33 | 240 | 50% | 3356 | 65% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3395 | 28 | 304 | 51% | 3384 | 75% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3326 | 38 | 188 | 48% | 3344 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3056 | 31 | 276 | 44% | 3101 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3194 | 29 | 312 | 49% | 3204 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3237 | 32 | 262 | 53% | 3208 | 59% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3201 | 34 | 240 | 53% | 3164 | 56% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2905 | 31 | 320 | 51% | 2894 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |