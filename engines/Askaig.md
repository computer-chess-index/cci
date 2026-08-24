# Engine: Askaig

Author: Nguyen Van Thang

Home: https://github.com/sophiathedev/askaig

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20260811 | 2026-08-11 | 2997<sub>(-18) | 3266<sub>(+60) | 3293<sub>(+41) |  |
| 20260704 | 2026-07-04 | 3015<sub>(+613) | 3206<sub>(+538) | 3252<sub>(+534) |  |
| 20260628 | 2026-06-28 | 2402<sub>(-1) | 2668<sub>(+22) | 2718<sub>(-23) |  |
| 20260616 | 2026-06-16 | 2403<sub>(+new) | 2646<sub>(+new) | 2741<sub>(+new) |  |
| 20260615 | 2026-06-15 |  |  |  |  |
| 20260614 | 2026-06-14 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Askaig+<version>&body=###%20Engine%20name%0AAskaig%0A%0A###%20Version%0A20260811" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-24 06:22:45

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20260616", "20260628", "20260704", "20260811"]
  y-axis "Elo Rating" 2400 --> 3300
  line "STC (8.0+0.08s)" [2403, 2402, 3015, 2997]
  line "STC (8.0+0.08s)" [2403, 2402, 3015, 2997]
  line "LTC (60.0+0.60s)" [2646, 2668, 3206, 3266]
  line "VLTC (2m24s+1.12s)" [2741, 2718, 3252, 3293]
  line "VLTC (2m24s+1.12s)" [2741, 2718, 3252, 3293]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260811 | VLTC <sub>(2m24s+1.12s)</sub> | 3293 | 32 | 270 | 51% | 3286 | 53% |
| 20260811 | LTC <sub>(60.0+0.60s)</sub> | 3266 | 31 | 304 | 50% | 3266 | 49% |
| 20260811 | STC <sub>(8.0+0.08s)</sub> | 2997 | 31 | 336 | 53% | 2971 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260704 | VLTC <sub>(2m24s+1.12s)</sub> | 3252 | 31 | 312 | 54% | 3217 | 50% |
| 20260704 | LTC <sub>(60.0+0.60s)</sub> | 3206 | 30 | 320 | 53% | 3178 | 52% |
| 20260704 | STC <sub>(8.0+0.08s)</sub> | 3015 | 32 | 312 | 53% | 2985 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260628 | VLTC <sub>(2m24s+1.12s)</sub> | 2718 | 46 | 148 | 51% | 2707 | 35% |
| 20260628 | LTC <sub>(60.0+0.60s)</sub> | 2668 | 53 | 116 | 49% | 2677 | 31% |
| 20260628 | STC <sub>(8.0+0.08s)</sub> | 2402 | 53 | 116 | 50% | 2400 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260616 | VLTC <sub>(2m24s+1.12s)</sub> | 2741 | 47 | 144 | 51% | 2728 | 36% |
| 20260616 | LTC <sub>(60.0+0.60s)</sub> | 2646 | 47 | 148 | 46% | 2680 | 34% |
| 20260616 | STC <sub>(8.0+0.08s)</sub> | 2403 | 41 | 196 | 44% | 2464 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |