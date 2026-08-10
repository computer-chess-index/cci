# Engine: Arcanum

Author: Lars Aurud

Home: https://github.com/LarsAur/Arcanum

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.8 | 2026-05-16 | 2898<sub>(+9) | 3216<sub>(+25) | 3276<sub>(+24) |  |
| 2.7 | 2025-10-18 | 2889 | 3191 | 3252 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Arcanum+<version>&body=###%20Engine%20name%0AArcanum%0A%0A###%20Version%0A2.8" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-10 06:59:19

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.7", "2.8"]
  y-axis "Elo Rating" 2800 --> 3300
  line "STC (8.0+0.08s)" [2889, 2898]
  line "STC (8.0+0.08s)" [2889, 2898]
  line "LTC (60.0+0.60s)" [3191, 3216]
  line "VLTC (2m24s+1.12s)" [3252, 3276]
  line "VLTC (2m24s+1.12s)" [3252, 3276]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.8 | VLTC <sub>(2m24s+1.12s)</sub> | 3276 | 26 | 392 | 50% | 3276 | 64% |
| 2.8 | LTC <sub>(60.0+0.60s)</sub> | 3216 | 27 | 384 | 49% | 3214 | 56% |
| 2.8 | STC <sub>(8.0+0.08s)</sub> | 2898 | 26 | 448 | 49% | 2912 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.7 | VLTC <sub>(2m24s+1.12s)</sub> | 3252 | 27 | 394 | 54% | 3218 | 56% |
| 2.7 | LTC <sub>(60.0+0.60s)</sub> | 3191 | 26 | 424 | 50% | 3174 | 57% |
| 2.7 | STC <sub>(8.0+0.08s)</sub> | 2889 | 23 | 554 | 49% | 2889 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |