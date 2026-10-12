# Engine: Tunguska

Author: Fernando Tenorio

Home: https://github.com/fernandotenorio/Tunguska

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2 | 2026-09-07 | 2778 | 3106 | 3206 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2 | 2026-09-07 | 3004 | 3357 | 3416 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2 | 2026-09-07 | 2919<sub>(+99) | 3183<sub>(+31) | 3289<sub>(+68) |  |
| 2.1 | 2026-04-08 | 2820<sub>(+309) | 3152<sub>(+297) | 3221<sub>(+285) |  |
| 2.0 | 2026-03-18 | 2511 | 2855 | 2936 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Tunguska+<version>&body=###%20Engine%20name%0ATunguska%0A%0A###%20Version%0A2.2" target="_blank">Submit new version</a>

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

Generated: 2026-10-12 04:43:48

## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1", "2.2"]
  y-axis "Elo Rating" 2500 --> 3300
  line "T1: STC (8.0+0.08s)" [2511, 2820, 2919]
  line "T1: LTC (60.0+0.60s)" [2855, 3152, 3183]
  line "T1: VLTC (2m24s+1.12s)" [2936, 3221, 3289]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3206 | 30 | 296 | 47% | 3232 | 59% |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3289 | 30 | 284 | 50% | 3286 | 68% |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3416 | 35 | 212 | 47% | 3434 | 60% |
| 2.2 | LTC <sub>(60.0+0.60s)</sub> | 3183 | 33 | 244 | 49% | 3186 | 61% |
| 2.2 | LTC <sub>(60.0+0.60s)</sub> | 3357 | 34 | 232 | 50% | 3362 | 57% |
| 2.2 | LTC <sub>(60.0+0.60s)</sub> | 3106 | 28 | 358 | 46% | 3136 | 58% |
| 2.2 | STC <sub>(8.0+0.08s)</sub> | 2919 | 34 | 252 | 50% | 2919 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2 | STC <sub>(8.0+0.08s)</sub> | 3004 | 36 | 228 | 45% | 3046 | 45% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2 | STC <sub>(8.0+0.08s)</sub> | 2778 | 30 | 324 | 44% | 2827 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3221 | 24 | 488 | 50% | 3217 | 59% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 3152 | 24 | 458 | 52% | 3135 | 59% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2820 | 23 | 540 | 48% | 2838 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2936 | 30 | 356 | 51% | 2920 | 37% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2855 | 31 | 328 | 50% | 2849 | 36% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2511 | 31 | 368 | 50% | 2504 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |