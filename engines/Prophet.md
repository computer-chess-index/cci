# Engine: Prophet

Author: James Swafford

Home: https://github.com/jswaff/prophet

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2 | 2026-05-16 | 2124<sub>(-41) | 2384<sub>(-41) | 2498<sub>(-2) |  |
| 5.1 | 2025-09-16 | 2165 | 2425 | 2500 |  |
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

Generated: 2026-09-06 06:27:13

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.1", "5.2"]
  y-axis "Elo Rating" 2100 --> 2500
  line "" [2165, 2124]
  line "STC (8.0+0.08s)" [2165, 2124]
  line "LTC (60.0+0.60s)" [2425, 2384]
  line "" [2500, 2498]
  line "VLTC (2m24s+1.12s)" [2500, 2498]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2498 | 28 | 434 | 49% | 2511 | 26% |
| 5.2 | LTC <sub>(60.0+0.60s)</sub> | 2384 | 28 | 424 | 49% | 2396 | 30% |
| 5.2 | STC <sub>(8.0+0.08s)</sub> | 2124 | 31 | 388 | 52% | 2106 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2500 | 30 | 380 | 48% | 2530 | 26% |
| 5.1 | LTC <sub>(60.0+0.60s)</sub> | 2425 | 28 | 416 | 49% | 2439 | 30% |
| 5.1 | STC <sub>(8.0+0.08s)</sub> | 2165 | 27 | 482 | 51% | 2160 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |