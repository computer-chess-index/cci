# Engine: SoloEngine

Author: Yunus Emre Yıldız

Home: https://github.com/yunusemreyldz07/SoloEngine

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2.0 | 2026-06-06 | 2792 | 3075 | 3137 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2.0 | 2026-06-06 | 3005 | 3337 | 3407 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2.0 | 2026-06-06 | 2874<sub>(+595) | 3148<sub>(+528) | 3244<sub>(+481) |  |
| 2.0.0 | 2026-03-23 | 2279<sub>(+97) | 2620<sub>(+144) | 2763<sub>(+149) |  |
| 1.6.0 | 2026-03-14 | 2182<sub>(+150) | 2476<sub>(+135) | 2614<sub>(+164) |  |
| 1.5.0 | 2026-03-04 | 2032<sub>(+255) | 2341<sub>(+247) | 2450<sub>(+239) |  |
| 1.4.0 | 2026-02-07 | 1777<sub>(+133) | 2094<sub>(+105) | 2211<sub>(+125) |  |
| 1.3.1 | 2026-02-01 | 1644<sub>(-25) | 1989<sub>(+18) | 2086<sub>(+53) |  |
| 1.2.2 | 2026-01-23 | 1669 | 1971 | 2033 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+SoloEngine+<version>&body=###%20Engine%20name%0ASoloEngine%0A%0A###%20Version%0A2.2.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-10 04:42:45

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.2", "1.3.1", "1.4.0", "1.5.0", "1.6.0", "2.0.0", "2.2.0"]
  y-axis "Elo Rating" 1600 --> 3300
  line "" [1669, 1644, 1777, 2032, 2182, 2279, 2874]
  line "STC (8.0+0.08s)" [1669, 1644, 1777, 2032, 2182, 2279, 2874]
  line "LTC (60.0+0.60s)" [1971, 1989, 2094, 2341, 2476, 2620, 3148]
  line "" [2033, 2086, 2211, 2450, 2614, 2763, 3244]
  line "VLTC (2m24s+1.12s)" [2033, 2086, 2211, 2450, 2614, 2763, 3244]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3137 | 39 | 202 | 56% | 3062 | 48% |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3244 | 26 | 380 | 50% | 3243 | 63% |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3407 | 42 | 178 | 60% | 3218 | 46% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 3075 | 36 | 242 | 59% | 2920 | 46% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 3148 | 28 | 368 | 53% | 3116 | 55% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 3337 | 40 | 174 | 55% | 3283 | 55% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2792 | 35 | 252 | 49% | 2803 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2874 | 25 | 484 | 52% | 2855 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 3005 | 41 | 180 | 49% | 3017 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2763 | 27 | 436 | 52% | 2746 | 32% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2620 | 31 | 328 | 49% | 2626 | 34% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2279 | 31 | 348 | 52% | 2263 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2614 | 34 | 280 | 50% | 2608 | 36% |
| 1.6.0 | LTC <sub>(60.0+0.60s)</sub> | 2476 | 32 | 332 | 51% | 2464 | 30% |
| 1.6.0 | STC <sub>(8.0+0.08s)</sub> | 2182 | 35 | 288 | 49% | 2199 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2450 | 30 | 380 | 48% | 2469 | 28% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2341 | 37 | 252 | 52% | 2325 | 25% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2032 | 35 | 288 | 54% | 1991 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2211 | 36 | 264 | 49% | 2221 | 28% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2094 | 40 | 206 | 53% | 2072 | 33% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1777 | 43 | 180 | 51% | 1769 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2086 | 40 | 204 | 52% | 2071 | 31% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 1989 | 46 | 164 | 51% | 1983 | 23% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 1644 | 42 | 208 | 47% | 1670 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2033 | 38 | 260 | 46% | 2103 | 24% |
| 1.2.2 | LTC <sub>(60.0+0.60s)</sub> | 1971 | 43 | 204 | 46% | 2034 | 20% |
| 1.2.2 | STC <sub>(8.0+0.08s)</sub> | 1669 | 41 | 232 | 47% | 1724 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |