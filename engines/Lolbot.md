# Engine: Lolbot

Author: Lorentz Vedeler

Home: https://github.com/loldot/lolbot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.1 | 2026-04-13 | 2088<sub>(+60) | 2410<sub>(+168) | 2441<sub>(+122) |  |
| 0.2.3 | 2025-12-08 | 2028<sub>(+30) | 2242<sub>(-25) | 2319<sub>(+15) |  |
| 0.2.2 | 2025-11-29 | 1998<sub>(+65) | 2267<sub>(+80) | 2304<sub>(-19) |  |
| 0.2.1 | 2025-11-16 | 1933<sub>(-69) | 2187<sub>(-28) | 2323<sub>(-52) |  |
| 0.2 | 2025-11-15 | 2002 | 2215 | 2375 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lolbot+<version>&body=###%20Engine%20name%0ALolbot%0A%0A###%20Version%0A0.3.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-26 04:39:33

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.2.1", "0.2.2", "0.2.3", "0.3.1"]
  y-axis "Elo Rating" 1900 --> 2500
  line "" [2002, 1933, 1998, 2028, 2088]
  line "STC (8.0+0.08s)" [2002, 1933, 1998, 2028, 2088]
  line "LTC (60.0+0.60s)" [2215, 2187, 2267, 2242, 2410]
  line "" [2375, 2323, 2304, 2319, 2441]
  line "VLTC (2m24s+1.12s)" [2375, 2323, 2304, 2319, 2441]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2441 | 26 | 516 | 51% | 2421 | 24% |
| 0.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2410 | 26 | 530 | 53% | 2381 | 22% |
| 0.3.1 | STC <sub>(8.0+0.08s)</sub> | 2088 | 26 | 552 | 49% | 2086 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2319 | 31 | 362 | 48% | 2338 | 26% |
| 0.2.3 | LTC <sub>(60.0+0.60s)</sub> | 2242 | 31 | 376 | 51% | 2228 | 22% |
| 0.2.3 | STC <sub>(8.0+0.08s)</sub> | 2028 | 28 | 468 | 49% | 2036 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2304 | 53 | 128 | 53% | 2275 | 20% |
| 0.2.2 | LTC <sub>(60.0+0.60s)</sub> | 2267 | 66 | 76 | 51% | 2265 | 28% |
| 0.2.2 | STC <sub>(8.0+0.08s)</sub> | 1998 | 59 | 104 | 49% | 2012 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2323 | 55 | 132 | 44% | 2399 | 14% |
| 0.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2187 | 64 | 88 | 46% | 2228 | 17% |
| 0.2.1 | STC <sub>(8.0+0.08s)</sub> | 1933 | 70 | 76 | 50% | 1933 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2375 | 56 | 116 | 52% | 2354 | 16% |
| 0.2 | LTC <sub>(60.0+0.60s)</sub> | 2215 | 47 | 160 | 49% | 2228 | 20% |
| 0.2 | STC <sub>(8.0+0.08s)</sub> | 2002 | 59 | 100 | 54% | 1963 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |