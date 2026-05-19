# Engine: Grail

Author: Jorgen Hanssen

Home: https://github.com/jorgenhanssen/grail

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-05-11 | 2901<sub>(+90) | 3178<sub>(+95) | 3262<sub>(+81) |  |
| 1.1.0 | 2026-02-28 | 2811<sub>(+349) | 3083<sub>(+359) | 3181<sub>(+320) |  |
| 1.0.4 | 2026-01-16 | 2462<sub>(+126) | 2724<sub>(+37) | 2861<sub>(+102) |  |
| 1.0.3 | 2026-01-04 | 2336<sub>(+26) | 2687<sub>(+114) | 2759<sub>(+72) |  |
| 1.0.2 | 2025-12-16 | 2310<sub>(+30) | 2573<sub>(+19) | 2687<sub>(-52) |  |
| 1.0.1 | 2025-12-10 | 2280<sub>(+35) | 2554<sub>(-12) | 2739<sub>(-51) |  |
| 1.0.0 | 2025-12-05 | 2245 | 2566 | 2790 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Grail+<version>&body=###%20Engine%20name%0AGrail%0A%0A###%20Version%0A2.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-19 06:25:10

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.0.2", "1.0.3", "1.0.4", "1.1.0", "2.0.0"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2245, 2280, 2310, 2336, 2462, 2811, 2901]
  line "STC (8.0+0.08s)" [2245, 2280, 2310, 2336, 2462, 2811, 2901]
  line "LTC (60.0+0.60s)" [2566, 2554, 2573, 2687, 2724, 3083, 3178]
  line "VLTC (2m24s+1.12s)" [2790, 2739, 2687, 2759, 2861, 3181, 3262]
  line "VLTC (2m24s+1.12s)" [2790, 2739, 2687, 2759, 2861, 3181, 3262]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3262 | 32 | 260 | 50% | 3258 | 62% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3178 | 31 | 290 | 49% | 3185 | 51% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2901 | 31 | 312 | 52% | 2888 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3181 | 27 | 392 | 53% | 3160 | 53% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3083 | 28 | 356 | 51% | 3070 | 53% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2811 | 28 | 398 | 51% | 2801 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2861 | 34 | 272 | 49% | 2869 | 39% |
| 1.0.4 | LTC <sub>(60.0+0.60s)</sub> | 2724 | 35 | 252 | 50% | 2727 | 35% |
| 1.0.4 | STC <sub>(8.0+0.08s)</sub> | 2462 | 31 | 348 | 55% | 2418 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2759 | 43 | 172 | 50% | 2763 | 31% |
| 1.0.3 | LTC <sub>(60.0+0.60s)</sub> | 2687 | 45 | 160 | 51% | 2681 | 33% |
| 1.0.3 | STC <sub>(8.0+0.08s)</sub> | 2336 | 44 | 172 | 51% | 2329 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2687 | 38 | 214 | 50% | 2688 | 35% |
| 1.0.2 | LTC <sub>(60.0+0.60s)</sub> | 2573 | 35 | 264 | 46% | 2611 | 33% |
| 1.0.2 | STC <sub>(8.0+0.08s)</sub> | 2310 | 41 | 212 | 55% | 2265 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2739 | 42 | 180 | 52% | 2724 | 34% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2554 | 40 | 202 | 53% | 2527 | 30% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 2280 | 50 | 142 | 48% | 2299 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2790 | 61 | 92 | 42% | 2861 | 28% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2566 | 59 | 92 | 46% | 2601 | 34% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2245 | 67 | 82 | 59% | 2161 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |