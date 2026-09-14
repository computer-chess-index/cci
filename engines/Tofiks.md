# Engine: Tofiks

Author: Arturs Priede

Home: https://github.com/likeawizard/tofiks

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-04-23 | 2191<sub>(+144) | 2435<sub>(+113) | 2480<sub>(+81) |  |
| 1.4.1 | 2026-04-11 | 2047<sub>(-40) | 2322<sub>(+28) | 2399<sub>(+14) |  |
| 1.4.0 | 2026-04-09 | 2087 | 2294 | 2385 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Tofiks+<version>&body=###%20Engine%20name%0ATofiks%0A%0A###%20Version%0A1.5.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-14 04:42:58

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4.0", "1.4.1", "1.5.0"]
  y-axis "Elo Rating" 2000 --> 2500
  line "" [2087, 2047, 2191]
  line "STC (8.0+0.08s)" [2087, 2047, 2191]
  line "LTC (60.0+0.60s)" [2294, 2322, 2435]
  line "" [2385, 2399, 2480]
  line "VLTC (2m24s+1.12s)" [2385, 2399, 2480]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2480 | 25 | 510 | 49% | 2485 | 35% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2435 | 25 | 508 | 51% | 2427 | 34% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2191 | 25 | 564 | 48% | 2206 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2399 | 33 | 292 | 50% | 2396 | 33% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2322 | 34 | 296 | 50% | 2321 | 29% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2047 | 34 | 302 | 51% | 2033 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2385 | 40 | 216 | 47% | 2414 | 29% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2294 | 39 | 226 | 53% | 2269 | 29% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2087 | 43 | 184 | 50% | 2082 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |