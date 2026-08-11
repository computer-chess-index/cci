# Engine: Arcanum

Author: Lars Aurud

Home: https://github.com/LarsAur/Arcanum

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.8 | 2026-05-16 | 2897<sub>(+9) | 3217<sub>(+26) | 3275<sub>(+24) |  |
| 2.7 | 2025-10-18 | 2888 | 3191 | 3251 |  |
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

Generated: 2026-08-11 06:22:39

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.7", "2.8"]
  y-axis "Elo Rating" 2800 --> 3300
  line "STC (8.0+0.08s)" [2888, 2897]
  line "STC (8.0+0.08s)" [2888, 2897]
  line "LTC (60.0+0.60s)" [3191, 3217]
  line "VLTC (2m24s+1.12s)" [3251, 3275]
  line "VLTC (2m24s+1.12s)" [3251, 3275]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.8 | VLTC <sub>(2m24s+1.12s)</sub> | 3275 | 26 | 392 | 50% | 3275 | 64% |
| 2.8 | LTC <sub>(60.0+0.60s)</sub> | 3217 | 27 | 388 | 50% | 3213 | 56% |
| 2.8 | STC <sub>(8.0+0.08s)</sub> | 2897 | 26 | 448 | 49% | 2911 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.7 | VLTC <sub>(2m24s+1.12s)</sub> | 3251 | 27 | 394 | 54% | 3217 | 56% |
| 2.7 | LTC <sub>(60.0+0.60s)</sub> | 3191 | 26 | 424 | 50% | 3173 | 57% |
| 2.7 | STC <sub>(8.0+0.08s)</sub> | 2888 | 23 | 554 | 49% | 2888 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |