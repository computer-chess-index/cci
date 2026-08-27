# Engine: Prophet

Author: James Swafford

Home: https://github.com/jswaff/prophet

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2 | 2026-05-16 | 2114<sub>(-50) | 2381<sub>(-42) | 2493<sub>(-5) |  |
| 5.1 | 2025-09-16 | 2164 | 2423 | 2498 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Prophet+<version>&body=###%20Engine%20name%0AProphet%0A%0A###%20Version%0A5.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-27 07:37:48

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.1", "5.2"]
  y-axis "Elo Rating" 2100 --> 2500
  line "" [2164, 2114]
  line "STC (8.0+0.08s)" [2164, 2114]
  line "LTC (60.0+0.60s)" [2423, 2381]
  line "" [2498, 2493]
  line "VLTC (2m24s+1.12s)" [2498, 2493]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2493 | 28 | 430 | 49% | 2508 | 26% |
| 5.2 | LTC <sub>(60.0+0.60s)</sub> | 2381 | 28 | 420 | 48% | 2395 | 30% |
| 5.2 | STC <sub>(8.0+0.08s)</sub> | 2114 | 31 | 364 | 52% | 2101 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2498 | 30 | 380 | 48% | 2529 | 26% |
| 5.1 | LTC <sub>(60.0+0.60s)</sub> | 2423 | 28 | 416 | 49% | 2437 | 30% |
| 5.1 | STC <sub>(8.0+0.08s)</sub> | 2164 | 27 | 482 | 51% | 2159 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |