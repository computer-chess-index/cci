# Engine: Zeno

Author: Oswald Nounagnon

Home: https://github.com/Toudonou/zeno

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-08-14 | 2133<sub>(+227) | 2388<sub>(+227) | 2421<sub>(+162) |  |
| 2.0 | 2026-03-08 | 1906 | 2161 | 2259 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zeno+<version>&body=###%20Engine%20name%0AZeno%0A%0A###%20Version%0A3.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-09 04:44:52

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 1900 --> 2500
  line "" [1906, 2133]
  line "STC (8.0+0.08s)" [1906, 2133]
  line "LTC (60.0+0.60s)" [2161, 2388]
  line "" [2259, 2421]
  line "VLTC (2m24s+1.12s)" [2259, 2421]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2421 | 34 | 296 | 51% | 2408 | 27% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2388 | 34 | 304 | 51% | 2381 | 20% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2133 | 36 | 280 | 53% | 2101 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2259 | 30 | 384 | 49% | 2279 | 24% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2161 | 28 | 460 | 49% | 2168 | 21% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 1906 | 27 | 482 | 48% | 1925 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |