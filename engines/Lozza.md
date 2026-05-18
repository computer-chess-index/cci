# Engine: Lozza

Author: Colin Jenkins

Home: https://github.com/op12no2/lozza

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6 | 2026-02-13 |  |  |  |  |
| 2 | 2026-02-13 |  |  |  |  |
| 10 | 2026-01-17 | 2912<sub>(+252) | 3127<sub>(+179) | 3163<sub>(+117) |  |
| 9 | 2026-01-10 | 2660<sub>(+18) | 2948<sub>(-14) | 3046<sub>(-32) |  |
| 8 | 2025-09-25 | 2642<sub>(+new) | 2962<sub>(+new) | 3078<sub>(+new) |  |
| 7 | 2025-07-12 |  |  |  |  |
| 5.1 | 2025-06-02 |  |  |  |  |
| 5 | 2025-02-25 |  |  |  |  |
| 4 | 2025-01-06 |  |  |  |  |
| 3 | 2024-10-06 |  |  |  |  |
| 2.5 | 2023-02-10 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lozza+<version>&body=###%20Engine%20name%0ALozza%0A%0A###%20Version%0A6" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-18 06:25:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8", "9", "10"]
  y-axis "Elo Rating" 2600 --> 3200
  line "STC (8.0+0.08s)" [2642, 2660, 2912]
  line "STC (8.0+0.08s)" [2642, 2660, 2912]
  line "LTC (60.0+0.60s)" [2962, 2948, 3127]
  line "VLTC (2m24s+1.12s)" [3078, 3046, 3163]
  line "VLTC (2m24s+1.12s)" [3078, 3046, 3163]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | VLTC <sub>(2m24s+1.12s)</sub> | 3163 | 27 | 402 | 51% | 3156 | 51% |
| 10 | LTC <sub>(60.0+0.60s)</sub> | 3127 | 27 | 388 | 52% | 3100 | 49% |
| 10 | STC <sub>(8.0+0.08s)</sub> | 2912 | 24 | 532 | 48% | 2928 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | 3046 | 36 | 216 | 51% | 3035 | 52% |
| 9 | LTC <sub>(60.0+0.60s)</sub> | 2948 | 40 | 182 | 48% | 2966 | 46% |
| 9 | STC <sub>(8.0+0.08s)</sub> | 2660 | 49 | 128 | 50% | 2661 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | VLTC <sub>(2m24s+1.12s)</sub> | 3078 | 38 | 198 | 51% | 3069 | 50% |
| 8 | LTC <sub>(60.0+0.60s)</sub> | 2962 | 37 | 208 | 52% | 2943 | 52% |
| 8 | STC <sub>(8.0+0.08s)</sub> | 2642 | 43 | 176 | 51% | 2631 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |