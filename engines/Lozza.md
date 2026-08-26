# Engine: Lozza

Author: Colin Jenkins

Home: https://github.com/op12no2/lozza

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 10 | 2026-01-17 | 2846<sub>(+239) | 3077<sub>(+176) | 3121<sub>(+124) |  |
| 9 | 2026-01-10 | 2607<sub>(+16) | 2901<sub>(-14) | 2997<sub>(-34) |  |
| 8 | 2025-09-25 | 2591 | 2915 | 3031 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lozza+<version>&body=###%20Engine%20name%0ALozza%0A%0A###%20Version%0A10" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-26 06:26:37

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8", "9", "10"]
  y-axis "Elo Rating" 2500 --> 3200
  line "STC (8.0+0.08s)" [2591, 2607, 2846]
  line "STC (8.0+0.08s)" [2591, 2607, 2846]
  line "LTC (60.0+0.60s)" [2915, 2901, 3077]
  line "VLTC (2m24s+1.12s)" [3031, 2997, 3121]
  line "VLTC (2m24s+1.12s)" [3031, 2997, 3121]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | VLTC <sub>(2m24s+1.12s)</sub> | 3121 | 24 | 480 | 51% | 3112 | 50% |
| 10 | LTC <sub>(60.0+0.60s)</sub> | 3077 | 24 | 488 | 51% | 3058 | 52% |
| 10 | STC <sub>(8.0+0.08s)</sub> | 2846 | 21 | 716 | 47% | 2865 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | 2997 | 36 | 216 | 51% | 2988 | 52% |
| 9 | LTC <sub>(60.0+0.60s)</sub> | 2901 | 40 | 182 | 48% | 2919 | 46% |
| 9 | STC <sub>(8.0+0.08s)</sub> | 2607 | 49 | 128 | 50% | 2610 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | VLTC <sub>(2m24s+1.12s)</sub> | 3031 | 38 | 198 | 51% | 3021 | 50% |
| 8 | LTC <sub>(60.0+0.60s)</sub> | 2915 | 37 | 208 | 52% | 2896 | 52% |
| 8 | STC <sub>(8.0+0.08s)</sub> | 2591 | 43 | 176 | 51% | 2581 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |