# Engine: SoloEngine

Author: Yunus Emre Yıldız

Home: https://github.com/yunusemreyldz07/SoloEngine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2.0 | 2026-06-06 | 2870<sub>(+new) | 3146<sub>(+new) | 3241<sub>(+new) |  |
| 2.1.0 | 2026-04-14 |  |  |  |  |
| 2.0.0 | 2026-03-23 | 2277<sub>(+97) | 2619<sub>(+146) | 2761<sub>(+150) |  |
| 1.6.0 | 2026-03-14 | 2180<sub>(+151) | 2473<sub>(+135) | 2611<sub>(+163) |  |
| 1.5.0 | 2026-03-04 | 2029<sub>(+254) | 2338<sub>(+247) | 2448<sub>(+238) |  |
| 1.4.0 | 2026-02-07 | 1775<sub>(+133) | 2091<sub>(+104) | 2210<sub>(+127) |  |
| 1.3.1 | 2026-02-01 | 1642<sub>(-25) | 1987<sub>(+19) | 2083<sub>(+53) |  |
| 1.2.2 | 2026-01-23 | 1667 | 1968 | 2030 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+SoloEngine+<version>&body=###%20Engine%20name%0ASoloEngine%0A%0A###%20Version%0A2.2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-01 04:43:05

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.2", "1.3.1", "1.4.0", "1.5.0", "1.6.0", "2.0.0", "2.2.0"]
  y-axis "Elo Rating" 1600 --> 3300
  line "" [1667, 1642, 1775, 2029, 2180, 2277, 2870]
  line "STC (8.0+0.08s)" [1667, 1642, 1775, 2029, 2180, 2277, 2870]
  line "LTC (60.0+0.60s)" [1968, 1987, 2091, 2338, 2473, 2619, 3146]
  line "" [2030, 2083, 2210, 2448, 2611, 2761, 3241]
  line "VLTC (2m24s+1.12s)" [2030, 2083, 2210, 2448, 2611, 2761, 3241]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3241 | 26 | 380 | 50% | 3241 | 63% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 3146 | 28 | 368 | 53% | 3114 | 55% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2870 | 25 | 480 | 52% | 2853 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2761 | 27 | 436 | 52% | 2745 | 32% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2619 | 31 | 328 | 49% | 2624 | 34% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2277 | 31 | 348 | 52% | 2260 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2611 | 34 | 280 | 50% | 2607 | 36% |
| 1.6.0 | LTC <sub>(60.0+0.60s)</sub> | 2473 | 32 | 332 | 51% | 2461 | 30% |
| 1.6.0 | STC <sub>(8.0+0.08s)</sub> | 2180 | 35 | 288 | 49% | 2196 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2448 | 30 | 380 | 48% | 2466 | 28% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2338 | 37 | 252 | 52% | 2322 | 25% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2029 | 35 | 288 | 54% | 1989 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2210 | 36 | 264 | 49% | 2218 | 28% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2091 | 40 | 206 | 53% | 2070 | 33% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1775 | 43 | 180 | 51% | 1766 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2083 | 40 | 204 | 52% | 2068 | 31% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 1987 | 46 | 164 | 51% | 1980 | 23% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 1642 | 42 | 208 | 47% | 1667 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2030 | 38 | 260 | 46% | 2101 | 24% |
| 1.2.2 | LTC <sub>(60.0+0.60s)</sub> | 1968 | 43 | 204 | 46% | 2032 | 20% |
| 1.2.2 | STC <sub>(8.0+0.08s)</sub> | 1667 | 41 | 232 | 47% | 1721 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |