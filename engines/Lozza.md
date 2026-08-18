# Engine: Lozza

Author: Colin Jenkins

Home: https://github.com/op12no2/lozza

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 10 | 2026-01-17 | 2840<sub>(+237) | 3071<sub>(+175) | 3117<sub>(+125) |  |
| 9 | 2026-01-10 | 2603<sub>(+18) | 2896<sub>(-13) | 2992<sub>(-33) |  |
| 8 | 2025-09-25 | 2585 | 2909 | 3025 |  |
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

Generated: 2026-08-18 06:26:40

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8", "9", "10"]
  y-axis "Elo Rating" 2500 --> 3200
  line "STC (8.0+0.08s)" [2585, 2603, 2840]
  line "STC (8.0+0.08s)" [2585, 2603, 2840]
  line "LTC (60.0+0.60s)" [2909, 2896, 3071]
  line "VLTC (2m24s+1.12s)" [3025, 2992, 3117]
  line "VLTC (2m24s+1.12s)" [3025, 2992, 3117]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | VLTC <sub>(2m24s+1.12s)</sub> | 3117 | 25 | 468 | 51% | 3105 | 50% |
| 10 | LTC <sub>(60.0+0.60s)</sub> | 3071 | 24 | 480 | 51% | 3052 | 51% |
| 10 | STC <sub>(8.0+0.08s)</sub> | 2840 | 21 | 712 | 47% | 2859 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | 2992 | 36 | 216 | 51% | 2982 | 52% |
| 9 | LTC <sub>(60.0+0.60s)</sub> | 2896 | 40 | 182 | 48% | 2913 | 46% |
| 9 | STC <sub>(8.0+0.08s)</sub> | 2603 | 49 | 128 | 50% | 2604 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | VLTC <sub>(2m24s+1.12s)</sub> | 3025 | 38 | 198 | 51% | 3016 | 50% |
| 8 | LTC <sub>(60.0+0.60s)</sub> | 2909 | 37 | 208 | 52% | 2890 | 52% |
| 8 | STC <sub>(8.0+0.08s)</sub> | 2585 | 43 | 176 | 51% | 2576 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |