# Engine: Lolbot

Author: Lorentz Vedeler

Home: https://github.com/loldot/lolbot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.1 | 2026-04-13 | 2087<sub>(+63) | 2406<sub>(+168) | 2435<sub>(+120) |  |
| 0.2.3 | 2025-12-08 | 2024<sub>(+30) | 2238<sub>(-25) | 2315<sub>(+15) |  |
| 0.2.2 | 2025-11-29 | 1994<sub>(+63) | 2263<sub>(+79) | 2300<sub>(-19) |  |
| 0.2.1 | 2025-11-16 | 1931<sub>(-68) | 2184<sub>(-27) | 2319<sub>(-52) |  |
| 0.2 | 2025-11-15 | 1999 | 2211 | 2371 |  |
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

Generated: 2026-09-06 06:25:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.2.1", "0.2.2", "0.2.3", "0.3.1"]
  y-axis "Elo Rating" 1900 --> 2500
  line "" [1999, 1931, 1994, 2024, 2087]
  line "STC (8.0+0.08s)" [1999, 1931, 1994, 2024, 2087]
  line "LTC (60.0+0.60s)" [2211, 2184, 2263, 2238, 2406]
  line "" [2371, 2319, 2300, 2315, 2435]
  line "VLTC (2m24s+1.12s)" [2371, 2319, 2300, 2315, 2435]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2435 | 26 | 508 | 51% | 2415 | 24% |
| 0.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2406 | 26 | 530 | 53% | 2377 | 22% |
| 0.3.1 | STC <sub>(8.0+0.08s)</sub> | 2087 | 26 | 540 | 49% | 2084 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2315 | 31 | 362 | 48% | 2334 | 26% |
| 0.2.3 | LTC <sub>(60.0+0.60s)</sub> | 2238 | 31 | 376 | 51% | 2223 | 22% |
| 0.2.3 | STC <sub>(8.0+0.08s)</sub> | 2024 | 28 | 468 | 49% | 2032 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2300 | 53 | 128 | 53% | 2271 | 20% |
| 0.2.2 | LTC <sub>(60.0+0.60s)</sub> | 2263 | 66 | 76 | 51% | 2261 | 28% |
| 0.2.2 | STC <sub>(8.0+0.08s)</sub> | 1994 | 59 | 104 | 49% | 2007 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2319 | 55 | 132 | 44% | 2395 | 14% |
| 0.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2184 | 64 | 88 | 46% | 2223 | 17% |
| 0.2.1 | STC <sub>(8.0+0.08s)</sub> | 1931 | 70 | 76 | 50% | 1931 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2371 | 56 | 116 | 52% | 2350 | 16% |
| 0.2 | LTC <sub>(60.0+0.60s)</sub> | 2211 | 47 | 160 | 49% | 2223 | 20% |
| 0.2 | STC <sub>(8.0+0.08s)</sub> | 1999 | 59 | 100 | 54% | 1959 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |