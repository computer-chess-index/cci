# Engine: Zeno

Author: Oswald Nounagnon

Home: https://github.com/Toudonou/zeno

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-08-14 | 2113<sub>(+214) | 2372<sub>(+217) | 2412<sub>(+160) |  |
| 2.0 | 2026-03-08 | 1899 | 2155 | 2252 |  |
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

Generated: 2026-08-30 06:36:36

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 1800 --> 2500
  line "" [1899, 2113]
  line "STC (8.0+0.08s)" [1899, 2113]
  line "LTC (60.0+0.60s)" [2155, 2372]
  line "" [2252, 2412]
  line "VLTC (2m24s+1.12s)" [2252, 2412]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2412 | 36 | 264 | 51% | 2402 | 29% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2372 | 36 | 280 | 50% | 2376 | 20% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2113 | 38 | 248 | 52% | 2088 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2252 | 30 | 384 | 49% | 2272 | 24% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2155 | 28 | 460 | 49% | 2161 | 21% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 1899 | 27 | 482 | 48% | 1918 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |