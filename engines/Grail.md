# Engine: Grail

Author: Jorgen Hanssen

Home: https://github.com/jorgenhanssen/grail

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-05-11 | 2889<sub>(+97) | 3151<sub>(+88) | 3241<sub>(+81) |  |
| 1.1.0 | 2026-02-28 | 2792<sub>(+348) | 3063<sub>(+358) | 3160<sub>(+318) |  |
| 1.0.4 | 2026-01-16 | 2444<sub>(+129) | 2705<sub>(+37) | 2842<sub>(+101) |  |
| 1.0.3 | 2026-01-04 | 2315<sub>(+25) | 2668<sub>(+114) | 2741<sub>(+73) |  |
| 1.0.2 | 2025-12-16 | 2290<sub>(+27) | 2554<sub>(+19) | 2668<sub>(-52) |  |
| 1.0.1 | 2025-12-10 | 2263<sub>(+37) | 2535<sub>(-12) | 2720<sub>(-52) |  |
| 1.0.0 | 2025-12-05 | 2226 | 2547 | 2772 |  |
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

Generated: 2026-06-10 06:24:55

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.0.2", "1.0.3", "1.0.4", "1.1.0", "2.0.0"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2226, 2263, 2290, 2315, 2444, 2792, 2889]
  line "STC (8.0+0.08s)" [2226, 2263, 2290, 2315, 2444, 2792, 2889]
  line "LTC (60.0+0.60s)" [2547, 2535, 2554, 2668, 2705, 3063, 3151]
  line "VLTC (2m24s+1.12s)" [2772, 2720, 2668, 2741, 2842, 3160, 3241]
  line "VLTC (2m24s+1.12s)" [2772, 2720, 2668, 2741, 2842, 3160, 3241]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3241 | 29 | 312 | 51% | 3236 | 62% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3151 | 29 | 322 | 48% | 3163 | 54% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2889 | 30 | 348 | 52% | 2871 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3160 | 27 | 392 | 53% | 3141 | 53% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3063 | 28 | 356 | 51% | 3051 | 53% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2792 | 28 | 398 | 51% | 2782 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2842 | 34 | 272 | 49% | 2850 | 39% |
| 1.0.4 | LTC <sub>(60.0+0.60s)</sub> | 2705 | 35 | 252 | 50% | 2708 | 35% |
| 1.0.4 | STC <sub>(8.0+0.08s)</sub> | 2444 | 31 | 348 | 55% | 2399 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2741 | 43 | 172 | 50% | 2745 | 31% |
| 1.0.3 | LTC <sub>(60.0+0.60s)</sub> | 2668 | 45 | 160 | 51% | 2662 | 33% |
| 1.0.3 | STC <sub>(8.0+0.08s)</sub> | 2315 | 44 | 172 | 51% | 2310 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2668 | 38 | 214 | 50% | 2669 | 35% |
| 1.0.2 | LTC <sub>(60.0+0.60s)</sub> | 2554 | 35 | 264 | 46% | 2592 | 33% |
| 1.0.2 | STC <sub>(8.0+0.08s)</sub> | 2290 | 41 | 212 | 55% | 2245 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2720 | 42 | 180 | 52% | 2705 | 34% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2535 | 40 | 202 | 53% | 2508 | 30% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 2263 | 50 | 142 | 48% | 2280 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2772 | 61 | 92 | 42% | 2842 | 28% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2547 | 59 | 92 | 46% | 2583 | 34% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2226 | 67 | 82 | 59% | 2142 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |