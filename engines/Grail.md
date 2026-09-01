# Engine: Grail

Author: Jorgen Hanssen

Home: https://github.com/jorgenhanssen/grail

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-10 | 2943<sub>(+35) | 3208<sub>(+41) | 3281<sub>(+21) |  |
| 2.0.0 | 2026-05-11 | 2908<sub>(+101) | 3167<sub>(+86) | 3260<sub>(+82) |  |
| 1.1.0 | 2026-02-28 | 2807<sub>(+354) | 3081<sub>(+362) | 3178<sub>(+321) |  |
| 1.0.4 | 2026-01-16 | 2453<sub>(+128) | 2719<sub>(+38) | 2857<sub>(+102) |  |
| 1.0.3 | 2026-01-04 | 2325<sub>(+26) | 2681<sub>(+115) | 2755<sub>(+74) |  |
| 1.0.2 | 2025-12-16 | 2299<sub>(+28) | 2566<sub>(+20) | 2681<sub>(-54) |  |
| 1.0.1 | 2025-12-10 | 2271<sub>(+35) | 2546<sub>(-14) | 2735<sub>(-53) |  |
| 1.0.0 | 2025-12-05 | 2236 | 2560 | 2788 |  |
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

Generated: 2026-09-01 19:01:05

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.0.2", "1.0.3", "1.0.4", "1.1.0", "2.0.0", "2.0.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "" [2236, 2271, 2299, 2325, 2453, 2807, 2908, 2943]
  line "STC (8.0+0.08s)" [2236, 2271, 2299, 2325, 2453, 2807, 2908, 2943]
  line "LTC (60.0+0.60s)" [2560, 2546, 2566, 2681, 2719, 3081, 3167, 3208]
  line "" [2788, 2735, 2681, 2755, 2857, 3178, 3260, 3281]
  line "VLTC (2m24s+1.12s)" [2788, 2735, 2681, 2755, 2857, 3178, 3260, 3281]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3281 | 26 | 404 | 52% | 3268 | 58% |
| 2.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3208 | 26 | 404 | 51% | 3201 | 59% |
| 2.0.1 | STC <sub>(8.0+0.08s)</sub> | 2943 | 26 | 442 | 52% | 2924 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3260 | 29 | 316 | 51% | 3254 | 61% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3167 | 29 | 322 | 48% | 3181 | 54% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2908 | 29 | 352 | 52% | 2888 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3178 | 27 | 392 | 53% | 3159 | 53% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3081 | 28 | 356 | 51% | 3067 | 53% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2807 | 28 | 398 | 51% | 2796 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2857 | 34 | 272 | 49% | 2865 | 39% |
| 1.0.4 | LTC <sub>(60.0+0.60s)</sub> | 2719 | 35 | 252 | 50% | 2722 | 35% |
| 1.0.4 | STC <sub>(8.0+0.08s)</sub> | 2453 | 31 | 348 | 55% | 2407 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2755 | 43 | 172 | 50% | 2758 | 31% |
| 1.0.3 | LTC <sub>(60.0+0.60s)</sub> | 2681 | 45 | 160 | 51% | 2676 | 33% |
| 1.0.3 | STC <sub>(8.0+0.08s)</sub> | 2325 | 44 | 172 | 51% | 2318 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2681 | 38 | 214 | 50% | 2681 | 35% |
| 1.0.2 | LTC <sub>(60.0+0.60s)</sub> | 2566 | 35 | 264 | 46% | 2604 | 33% |
| 1.0.2 | STC <sub>(8.0+0.08s)</sub> | 2299 | 41 | 212 | 55% | 2255 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2735 | 42 | 180 | 52% | 2720 | 34% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2546 | 40 | 202 | 53% | 2519 | 30% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 2271 | 50 | 142 | 48% | 2290 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2788 | 61 | 92 | 42% | 2858 | 28% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2560 | 59 | 92 | 46% | 2595 | 34% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2236 | 67 | 82 | 59% | 2151 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |