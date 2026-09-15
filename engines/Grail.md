# Engine: Grail

Author: Jorgen Hanssen

Home: https://github.com/jorgenhanssen/grail

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-10 | 2946<sub>(+35) | 3213<sub>(+43) | 3282<sub>(+19) |  |
| 2.0.0 | 2026-05-11 | 2911<sub>(+103) | 3170<sub>(+87) | 3263<sub>(+82) |  |
| 1.1.0 | 2026-02-28 | 2808<sub>(+354) | 3083<sub>(+361) | 3181<sub>(+322) |  |
| 1.0.4 | 2026-01-16 | 2454<sub>(+128) | 2722<sub>(+38) | 2859<sub>(+101) |  |
| 1.0.3 | 2026-01-04 | 2326<sub>(+26) | 2684<sub>(+115) | 2758<sub>(+74) |  |
| 1.0.2 | 2025-12-16 | 2300<sub>(+28) | 2569<sub>(+20) | 2684<sub>(-52) |  |
| 1.0.1 | 2025-12-10 | 2272<sub>(+35) | 2549<sub>(-13) | 2736<sub>(-54) |  |
| 1.0.0 | 2025-12-05 | 2237 | 2562 | 2790 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Grail+<version>&body=###%20Engine%20name%0AGrail%0A%0A###%20Version%0A2.0.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-15 04:38:39

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.0.2", "1.0.3", "1.0.4", "1.1.0", "2.0.0", "2.0.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "" [2237, 2272, 2300, 2326, 2454, 2808, 2911, 2946]
  line "STC (8.0+0.08s)" [2237, 2272, 2300, 2326, 2454, 2808, 2911, 2946]
  line "LTC (60.0+0.60s)" [2562, 2549, 2569, 2684, 2722, 3083, 3170, 3213]
  line "" [2790, 2736, 2684, 2758, 2859, 3181, 3263, 3282]
  line "VLTC (2m24s+1.12s)" [2790, 2736, 2684, 2758, 2859, 3181, 3263, 3282]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3282 | 26 | 412 | 51% | 3271 | 58% |
| 2.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3213 | 25 | 424 | 51% | 3206 | 60% |
| 2.0.1 | STC <sub>(8.0+0.08s)</sub> | 2946 | 25 | 458 | 52% | 2927 | 45% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3263 | 29 | 316 | 51% | 3256 | 61% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3170 | 29 | 322 | 48% | 3183 | 54% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2911 | 29 | 352 | 52% | 2890 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3181 | 27 | 392 | 53% | 3162 | 53% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3083 | 28 | 356 | 51% | 3070 | 53% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2808 | 28 | 398 | 51% | 2799 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2859 | 34 | 272 | 49% | 2867 | 39% |
| 1.0.4 | LTC <sub>(60.0+0.60s)</sub> | 2722 | 35 | 252 | 50% | 2724 | 35% |
| 1.0.4 | STC <sub>(8.0+0.08s)</sub> | 2454 | 31 | 348 | 55% | 2410 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2758 | 43 | 172 | 50% | 2761 | 31% |
| 1.0.3 | LTC <sub>(60.0+0.60s)</sub> | 2684 | 45 | 160 | 51% | 2677 | 33% |
| 1.0.3 | STC <sub>(8.0+0.08s)</sub> | 2326 | 44 | 172 | 51% | 2319 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2684 | 38 | 214 | 50% | 2684 | 35% |
| 1.0.2 | LTC <sub>(60.0+0.60s)</sub> | 2569 | 35 | 264 | 46% | 2607 | 33% |
| 1.0.2 | STC <sub>(8.0+0.08s)</sub> | 2300 | 41 | 212 | 55% | 2256 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2736 | 42 | 180 | 52% | 2722 | 34% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2549 | 40 | 202 | 53% | 2522 | 30% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 2272 | 50 | 142 | 48% | 2291 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2790 | 61 | 92 | 42% | 2861 | 28% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2562 | 59 | 92 | 46% | 2597 | 34% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2237 | 67 | 82 | 59% | 2152 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |