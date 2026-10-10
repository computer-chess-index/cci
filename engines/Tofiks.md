# Engine: Tofiks

Author: Arturs Priede

Home: https://github.com/likeawizard/tofiks

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-04-23 | 2066 | 2323 | 2412 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-04-23 | 2314 | 2581 | 2730 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-04-23 | 2195<sub>(+144) | 2444<sub>(+117) | 2484<sub>(+80) |  |
| 1.4.1 | 2026-04-11 | 2051<sub>(-40) | 2327<sub>(+29) | 2404<sub>(+14) |  |
| 1.4.0 | 2026-04-09 | 2091 | 2298 | 2390 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Tofiks+<version>&body=###%20Engine%20name%0ATofiks%0A%0A###%20Version%0A1.5.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-10 04:43:27

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4.0", "1.4.1", "1.5.0"]
  y-axis "Elo Rating" 2000 --> 2500
  line "" [2091, 2051, 2195]
  line "STC (8.0+0.08s)" [2091, 2051, 2195]
  line "LTC (60.0+0.60s)" [2298, 2327, 2444]
  line "" [2390, 2404, 2484]
  line "VLTC (2m24s+1.12s)" [2390, 2404, 2484]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2484 | 25 | 510 | 49% | 2489 | 35% |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2730 | 44 | 174 | 48% | 2743 | 29% |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2412 | 40 | 196 | 51% | 2404 | 40% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2444 | 25 | 516 | 51% | 2431 | 34% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2581 | 50 | 136 | 45% | 2635 | 31% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2323 | 42 | 198 | 53% | 2272 | 31% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2195 | 25 | 572 | 48% | 2210 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2314 | 42 | 188 | 50% | 2326 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2066 | 39 | 232 | 47% | 2107 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2404 | 33 | 292 | 50% | 2400 | 33% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2327 | 34 | 296 | 50% | 2325 | 29% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2051 | 34 | 302 | 51% | 2039 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2390 | 40 | 216 | 47% | 2418 | 29% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2298 | 39 | 226 | 53% | 2275 | 29% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2091 | 43 | 184 | 50% | 2086 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |