# Engine: Tofiks

Author: Arturs Priede

Home: https://github.com/likeawizard/tofiks

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-04-23 | 2190<sub>(+145) | 2433<sub>(+112) | 2476<sub>(+78) |  |
| 1.4.1 | 2026-04-11 | 2045<sub>(-39) | 2321<sub>(+29) | 2398<sub>(+15) |  |
| 1.4.0 | 2026-04-09 | 2084 | 2292 | 2383 |  |
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

Generated: 2026-09-02 04:40:20

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4.0", "1.4.1", "1.5.0"]
  y-axis "Elo Rating" 2000 --> 2500
  line "" [2084, 2045, 2190]
  line "STC (8.0+0.08s)" [2084, 2045, 2190]
  line "LTC (60.0+0.60s)" [2292, 2321, 2433]
  line "" [2383, 2398, 2476]
  line "VLTC (2m24s+1.12s)" [2383, 2398, 2476]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2476 | 25 | 504 | 49% | 2483 | 35% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2433 | 26 | 496 | 51% | 2425 | 33% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2190 | 25 | 552 | 48% | 2205 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2398 | 33 | 292 | 50% | 2394 | 33% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2321 | 34 | 296 | 50% | 2319 | 29% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2045 | 34 | 302 | 51% | 2032 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2383 | 40 | 216 | 47% | 2411 | 29% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2292 | 39 | 226 | 53% | 2268 | 29% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2084 | 43 | 184 | 50% | 2080 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |