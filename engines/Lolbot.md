# Engine: Lolbot

Author: Lorentz Vedeler

Home: https://github.com/loldot/lolbot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.1 | 2026-04-13 | 2084<sub>(+59) | 2407<sub>(+167) | 2437<sub>(+120) |  |
| 0.2.3 | 2025-12-08 | 2025<sub>(+31) | 2240<sub>(-24) | 2317<sub>(+15) |  |
| 0.2.2 | 2025-11-29 | 1994<sub>(+63) | 2264<sub>(+80) | 2302<sub>(-19) |  |
| 0.2.1 | 2025-11-16 | 1931<sub>(-68) | 2184<sub>(-29) | 2321<sub>(-51) |  |
| 0.2 | 2025-11-15 | 1999 | 2213 | 2372 |  |
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

Generated: 2026-09-14 04:39:29

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.2.1", "0.2.2", "0.2.3", "0.3.1"]
  y-axis "Elo Rating" 1900 --> 2500
  line "" [1999, 1931, 1994, 2025, 2084]
  line "STC (8.0+0.08s)" [1999, 1931, 1994, 2025, 2084]
  line "LTC (60.0+0.60s)" [2213, 2184, 2264, 2240, 2407]
  line "" [2372, 2321, 2302, 2317, 2437]
  line "VLTC (2m24s+1.12s)" [2372, 2321, 2302, 2317, 2437]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2437 | 26 | 516 | 51% | 2418 | 24% |
| 0.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2407 | 26 | 530 | 53% | 2379 | 22% |
| 0.3.1 | STC <sub>(8.0+0.08s)</sub> | 2084 | 26 | 552 | 49% | 2082 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2317 | 31 | 362 | 48% | 2336 | 26% |
| 0.2.3 | LTC <sub>(60.0+0.60s)</sub> | 2240 | 31 | 376 | 51% | 2225 | 22% |
| 0.2.3 | STC <sub>(8.0+0.08s)</sub> | 2025 | 28 | 468 | 49% | 2032 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2302 | 53 | 128 | 53% | 2272 | 20% |
| 0.2.2 | LTC <sub>(60.0+0.60s)</sub> | 2264 | 66 | 76 | 51% | 2263 | 28% |
| 0.2.2 | STC <sub>(8.0+0.08s)</sub> | 1994 | 59 | 104 | 49% | 2007 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2321 | 55 | 132 | 44% | 2396 | 14% |
| 0.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2184 | 64 | 88 | 46% | 2223 | 17% |
| 0.2.1 | STC <sub>(8.0+0.08s)</sub> | 1931 | 70 | 76 | 50% | 1931 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2372 | 56 | 116 | 52% | 2352 | 16% |
| 0.2 | LTC <sub>(60.0+0.60s)</sub> | 2213 | 47 | 160 | 49% | 2225 | 20% |
| 0.2 | STC <sub>(8.0+0.08s)</sub> | 1999 | 59 | 100 | 54% | 1959 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |