# Engine: Grail

Author: Jorgen Hanssen

Home: https://github.com/jorgenhanssen/grail

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-05-11 | 2892<sub>(+100) | 3151<sub>(+86) | 3240<sub>(+78) |  |
| 1.1.0 | 2026-02-28 | 2792<sub>(+347) | 3065<sub>(+358) | 3162<sub>(+320) |  |
| 1.0.4 | 2026-01-16 | 2445<sub>(+128) | 2707<sub>(+38) | 2842<sub>(+100) |  |
| 1.0.3 | 2026-01-04 | 2317<sub>(+26) | 2669<sub>(+113) | 2742<sub>(+73) |  |
| 1.0.2 | 2025-12-16 | 2291<sub>(+28) | 2556<sub>(+19) | 2669<sub>(-53) |  |
| 1.0.1 | 2025-12-10 | 2263<sub>(+37) | 2537<sub>(-12) | 2722<sub>(-50) |  |
| 1.0.0 | 2025-12-05 | 2226 | 2549 | 2772 |  |
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

Generated: 2026-06-08 06:24:45

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.0.2", "1.0.3", "1.0.4", "1.1.0", "2.0.0"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2226, 2263, 2291, 2317, 2445, 2792, 2892]
  line "STC (8.0+0.08s)" [2226, 2263, 2291, 2317, 2445, 2792, 2892]
  line "LTC (60.0+0.60s)" [2549, 2537, 2556, 2669, 2707, 3065, 3151]
  line "VLTC (2m24s+1.12s)" [2772, 2722, 2669, 2742, 2842, 3162, 3240]
  line "VLTC (2m24s+1.12s)" [2772, 2722, 2669, 2742, 2842, 3162, 3240]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3240 | 29 | 308 | 50% | 3237 | 62% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3151 | 29 | 322 | 48% | 3163 | 54% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2892 | 30 | 348 | 52% | 2874 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3162 | 27 | 392 | 53% | 3143 | 53% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3065 | 28 | 356 | 51% | 3051 | 53% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2792 | 28 | 398 | 51% | 2782 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2842 | 34 | 272 | 49% | 2850 | 39% |
| 1.0.4 | LTC <sub>(60.0+0.60s)</sub> | 2707 | 35 | 252 | 50% | 2708 | 35% |
| 1.0.4 | STC <sub>(8.0+0.08s)</sub> | 2445 | 31 | 348 | 55% | 2399 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2742 | 43 | 172 | 50% | 2745 | 31% |
| 1.0.3 | LTC <sub>(60.0+0.60s)</sub> | 2669 | 45 | 160 | 51% | 2662 | 33% |
| 1.0.3 | STC <sub>(8.0+0.08s)</sub> | 2317 | 44 | 172 | 51% | 2310 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2669 | 38 | 214 | 50% | 2669 | 35% |
| 1.0.2 | LTC <sub>(60.0+0.60s)</sub> | 2556 | 35 | 264 | 46% | 2593 | 33% |
| 1.0.2 | STC <sub>(8.0+0.08s)</sub> | 2291 | 41 | 212 | 55% | 2246 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2722 | 42 | 180 | 52% | 2705 | 34% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2537 | 40 | 202 | 53% | 2510 | 30% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 2263 | 50 | 142 | 48% | 2282 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2772 | 61 | 92 | 42% | 2842 | 28% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2549 | 59 | 92 | 46% | 2583 | 34% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2226 | 67 | 82 | 59% | 2142 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |