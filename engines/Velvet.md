# Engine: Velvet

Author: Mhonert

Home: https://github.com/mhonert/velvet-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.1.1 | 2024-11-06 | 3281<sub>(+15) | 3447<sub>(+6) | 3471<sub>(0) |  |
| 8.1.0 | 2024-10-28 | 3266<sub>(+26) | 3441<sub>(+19) | 3471<sub>(-1) |  |
| 8.0.0 | 2024-08-17 | 3240 | 3422 | 3472 |  |
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

Generated: 2026-08-26 06:36:19

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0.0", "8.1.0", "8.1.1"]
  y-axis "Elo Rating" 3200 --> 3500
  line "STC (8.0+0.08s)" [3240, 3266, 3281]
  line "STC (8.0+0.08s)" [3240, 3266, 3281]
  line "LTC (60.0+0.60s)" [3422, 3441, 3447]
  line "VLTC (2m24s+1.12s)" [3472, 3471, 3471]
  line "VLTC (2m24s+1.12s)" [3472, 3471, 3471]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3471 | 12 | 1684 | 50% | 3471 | 79% |
| 8.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3447 | 12 | 1756 | 51% | 3443 | 77% |
| 8.1.1 | STC <sub>(8.0+0.08s)</sub> | 3281 | 12 | 1784 | 50% | 3282 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3471 | 32 | 228 | 46% | 3499 | 82% |
| 8.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3441 | 38 | 172 | 51% | 3433 | 77% |
| 8.1.0 | STC <sub>(8.0+0.08s)</sub> | 3266 | 36 | 208 | 48% | 3282 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3472 | 33 | 228 | 49% | 3479 | 78% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3422 | 36 | 192 | 51% | 3414 | 76% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3240 | 29 | 308 | 50% | 3241 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |