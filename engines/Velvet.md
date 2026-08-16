# Engine: Velvet

Author: Mhonert

Home: https://github.com/mhonert/velvet-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.1.1 | 2024-11-06 | 3270<sub>(+14) | 3436<sub>(+6) | 3460<sub>(-1) |  |
| 8.1.0 | 2024-10-28 | 3256<sub>(+25) | 3430<sub>(+19) | 3461<sub>(0) |  |
| 8.0.0 | 2024-08-17 | 3231 | 3411 | 3461 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Velvet+<version>&body=###%20Engine%20name%0AVelvet%0A%0A###%20Version%0A8.1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-16 06:33:00

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0.0", "8.1.0", "8.1.1"]
  y-axis "Elo Rating" 3200 --> 3500
  line "STC (8.0+0.08s)" [3231, 3256, 3270]
  line "STC (8.0+0.08s)" [3231, 3256, 3270]
  line "LTC (60.0+0.60s)" [3411, 3430, 3436]
  line "VLTC (2m24s+1.12s)" [3461, 3461, 3460]
  line "VLTC (2m24s+1.12s)" [3461, 3461, 3460]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3460 | 12 | 1676 | 50% | 3460 | 79% |
| 8.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3436 | 12 | 1740 | 51% | 3432 | 77% |
| 8.1.1 | STC <sub>(8.0+0.08s)</sub> | 3270 | 12 | 1776 | 50% | 3271 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3461 | 32 | 228 | 46% | 3488 | 82% |
| 8.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3430 | 38 | 172 | 51% | 3422 | 77% |
| 8.1.0 | STC <sub>(8.0+0.08s)</sub> | 3256 | 36 | 208 | 48% | 3271 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3461 | 33 | 228 | 49% | 3468 | 78% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3411 | 36 | 192 | 51% | 3403 | 76% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3231 | 29 | 308 | 50% | 3232 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |