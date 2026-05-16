# Engine: Grail

Author: Jorgen Hanssen

Home: https://github.com/jorgenhanssen/grail

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-05-11 | 2944<sub>(+86) | 3227<sub>(+95) | 3309<sub>(+81) |  |
| 1.1.0 | 2026-02-28 | 2858<sub>(+352) | 3132<sub>(+360) | 3228<sub>(+320) |  |
| 1.0.4 | 2026-01-16 | 2506<sub>(+129) | 2772<sub>(+38) | 2908<sub>(+101) |  |
| 1.0.3 | 2026-01-04 | 2377<sub>(+27) | 2734<sub>(+114) | 2807<sub>(+73) |  |
| 1.0.2 | 2025-12-16 | 2350<sub>(+28) | 2620<sub>(+21) | 2734<sub>(-52) |  |
| 1.0.1 | 2025-12-10 | 2322<sub>(+40) | 2599<sub>(-15) | 2786<sub>(-52) |  |
| 1.0.0 | 2025-12-05 | 2282 | 2614 | 2838 |  |
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

Generated: 2026-05-16 06:24:40

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.0.2", "1.0.3", "1.0.4", "1.1.0", "2.0.0"]
  y-axis "Elo Rating" 2200 --> 3400
  line "STC (8.0+0.08s)" [2282, 2322, 2350, 2377, 2506, 2858, 2944]
  line "STC (8.0+0.08s)" [2282, 2322, 2350, 2377, 2506, 2858, 2944]
  line "LTC (60.0+0.60s)" [2614, 2599, 2620, 2734, 2772, 3132, 3227]
  line "VLTC (2m24s+1.12s)" [2838, 2786, 2734, 2807, 2908, 3228, 3309]
  line "VLTC (2m24s+1.12s)" [2838, 2786, 2734, 2807, 2908, 3228, 3309]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3309 | 33 | 244 | 50% | 3305 | 62% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3227 | 32 | 278 | 49% | 3232 | 51% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2944 | 33 | 280 | 52% | 2932 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3228 | 27 | 392 | 53% | 3209 | 53% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3132 | 28 | 356 | 51% | 3119 | 53% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2858 | 28 | 398 | 51% | 2849 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2908 | 34 | 272 | 49% | 2916 | 39% |
| 1.0.4 | LTC <sub>(60.0+0.60s)</sub> | 2772 | 35 | 252 | 50% | 2774 | 35% |
| 1.0.4 | STC <sub>(8.0+0.08s)</sub> | 2506 | 31 | 348 | 55% | 2461 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2807 | 43 | 172 | 50% | 2811 | 31% |
| 1.0.3 | LTC <sub>(60.0+0.60s)</sub> | 2734 | 45 | 160 | 51% | 2727 | 33% |
| 1.0.3 | STC <sub>(8.0+0.08s)</sub> | 2377 | 44 | 172 | 51% | 2371 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2734 | 38 | 214 | 50% | 2734 | 35% |
| 1.0.2 | LTC <sub>(60.0+0.60s)</sub> | 2620 | 35 | 264 | 46% | 2658 | 33% |
| 1.0.2 | STC <sub>(8.0+0.08s)</sub> | 2350 | 41 | 212 | 55% | 2306 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2786 | 42 | 180 | 52% | 2772 | 34% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2599 | 40 | 202 | 53% | 2572 | 30% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 2322 | 50 | 142 | 48% | 2341 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2838 | 61 | 92 | 42% | 2908 | 28% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2614 | 59 | 92 | 46% | 2647 | 34% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2282 | 67 | 82 | 59% | 2198 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |