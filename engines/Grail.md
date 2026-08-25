# Engine: Grail

Author: Jorgen Hanssen

Home: https://github.com/jorgenhanssen/grail

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-10 | 2939<sub>(+34) | 3204<sub>(+40) | 3279<sub>(+21) |  |
| 2.0.0 | 2026-05-11 | 2905<sub>(+102) | 3164<sub>(+87) | 3258<sub>(+83) |  |
| 1.1.0 | 2026-02-28 | 2803<sub>(+354) | 3077<sub>(+362) | 3175<sub>(+322) |  |
| 1.0.4 | 2026-01-16 | 2449<sub>(+127) | 2715<sub>(+37) | 2853<sub>(+102) |  |
| 1.0.3 | 2026-01-04 | 2322<sub>(+26) | 2678<sub>(+114) | 2751<sub>(+74) |  |
| 1.0.2 | 2025-12-16 | 2296<sub>(+28) | 2564<sub>(+21) | 2677<sub>(-54) |  |
| 1.0.1 | 2025-12-10 | 2268<sub>(+35) | 2543<sub>(-14) | 2731<sub>(-54) |  |
| 1.0.0 | 2025-12-05 | 2233 | 2557 | 2785 |  |
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

Generated: 2026-08-25 06:25:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.0.2", "1.0.3", "1.0.4", "1.1.0", "2.0.0", "2.0.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2233, 2268, 2296, 2322, 2449, 2803, 2905, 2939]
  line "STC (8.0+0.08s)" [2233, 2268, 2296, 2322, 2449, 2803, 2905, 2939]
  line "LTC (60.0+0.60s)" [2557, 2543, 2564, 2678, 2715, 3077, 3164, 3204]
  line "VLTC (2m24s+1.12s)" [2785, 2731, 2677, 2751, 2853, 3175, 3258, 3279]
  line "VLTC (2m24s+1.12s)" [2785, 2731, 2677, 2751, 2853, 3175, 3258, 3279]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3279 | 26 | 388 | 52% | 3264 | 58% |
| 2.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3204 | 26 | 392 | 51% | 3198 | 59% |
| 2.0.1 | STC <sub>(8.0+0.08s)</sub> | 2939 | 26 | 430 | 52% | 2920 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3258 | 29 | 316 | 51% | 3251 | 61% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3164 | 29 | 322 | 48% | 3177 | 54% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2905 | 29 | 352 | 52% | 2885 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3175 | 27 | 392 | 53% | 3155 | 53% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3077 | 28 | 356 | 51% | 3065 | 53% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2803 | 28 | 398 | 51% | 2793 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2853 | 34 | 272 | 49% | 2861 | 39% |
| 1.0.4 | LTC <sub>(60.0+0.60s)</sub> | 2715 | 35 | 252 | 50% | 2718 | 35% |
| 1.0.4 | STC <sub>(8.0+0.08s)</sub> | 2449 | 31 | 348 | 55% | 2404 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2751 | 43 | 172 | 50% | 2755 | 31% |
| 1.0.3 | LTC <sub>(60.0+0.60s)</sub> | 2678 | 45 | 160 | 51% | 2672 | 33% |
| 1.0.3 | STC <sub>(8.0+0.08s)</sub> | 2322 | 44 | 172 | 51% | 2315 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2677 | 38 | 214 | 50% | 2678 | 35% |
| 1.0.2 | LTC <sub>(60.0+0.60s)</sub> | 2564 | 35 | 264 | 46% | 2601 | 33% |
| 1.0.2 | STC <sub>(8.0+0.08s)</sub> | 2296 | 41 | 212 | 55% | 2252 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2731 | 42 | 180 | 52% | 2716 | 34% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2543 | 40 | 202 | 53% | 2516 | 30% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 2268 | 50 | 142 | 48% | 2287 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2785 | 61 | 92 | 42% | 2854 | 28% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2557 | 59 | 92 | 46% | 2591 | 34% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2233 | 67 | 82 | 59% | 2148 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |