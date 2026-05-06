# Engine: Grail

Author: Jorgen Hanssen

Home: https://github.com/jorgenhanssen/grail

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-02-28 | 2855<sub>(+351) | 3128<sub>(+359) | 3225<sub>(+320) |  |
| 1.0.4 | 2026-01-16 | 2504<sub>(+129) | 2769<sub>(+39) | 2905<sub>(+101) |  |
| 1.0.3 | 2026-01-04 | 2375<sub>(+27) | 2730<sub>(+112) | 2804<sub>(+73) |  |
| 1.0.2 | 2025-12-16 | 2348<sub>(+29) | 2618<sub>(+22) | 2731<sub>(-53) |  |
| 1.0.1 | 2025-12-10 | 2319<sub>(+39) | 2596<sub>(-15) | 2784<sub>(-51) |  |
| 1.0.0 | 2025-12-05 | 2280 | 2611 | 2835 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Grail+<version>&body=###%20Engine%20name%0AGrail%0A%0A###%20Version%0A1.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-06 06:24:47

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.0.2", "1.0.3", "1.0.4", "1.1.0"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2280, 2319, 2348, 2375, 2504, 2855]
  line "STC (8.0+0.08s)" [2280, 2319, 2348, 2375, 2504, 2855]
  line "LTC (60.0+0.60s)" [2611, 2596, 2618, 2730, 2769, 3128]
  line "VLTC (2m24s+1.12s)" [2835, 2784, 2731, 2804, 2905, 3225]
  line "VLTC (2m24s+1.12s)" [2835, 2784, 2731, 2804, 2905, 3225]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3225 | 27 | 392 | 53% | 3205 | 53% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3128 | 28 | 352 | 51% | 3114 | 53% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2855 | 28 | 398 | 51% | 2844 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2905 | 34 | 272 | 49% | 2913 | 39% |
| 1.0.4 | LTC <sub>(60.0+0.60s)</sub> | 2769 | 35 | 252 | 50% | 2772 | 35% |
| 1.0.4 | STC <sub>(8.0+0.08s)</sub> | 2504 | 31 | 348 | 55% | 2458 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2804 | 43 | 172 | 50% | 2808 | 31% |
| 1.0.3 | LTC <sub>(60.0+0.60s)</sub> | 2730 | 45 | 160 | 51% | 2724 | 33% |
| 1.0.3 | STC <sub>(8.0+0.08s)</sub> | 2375 | 44 | 172 | 51% | 2368 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2731 | 38 | 214 | 50% | 2731 | 35% |
| 1.0.2 | LTC <sub>(60.0+0.60s)</sub> | 2618 | 35 | 264 | 46% | 2654 | 33% |
| 1.0.2 | STC <sub>(8.0+0.08s)</sub> | 2348 | 41 | 212 | 55% | 2303 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2784 | 42 | 180 | 52% | 2769 | 34% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2596 | 40 | 202 | 53% | 2570 | 30% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 2319 | 50 | 142 | 48% | 2338 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2835 | 61 | 92 | 42% | 2905 | 28% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2611 | 59 | 92 | 46% | 2645 | 34% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2280 | 67 | 82 | 59% | 2195 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |