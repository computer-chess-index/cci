# Engine: Quirky

Author: Anton Kernozhitsky

Home: https://github.com/Wind-Eagle/Quirky

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-05-16 | 813<sub>(-2134) | 2053<sub>(-1126) | 1181<sub>(-2060) |  |
| 2.1 | 2025-11-25 | 2947<sub>(+new) | 3179<sub>(+new) | 3241<sub>(+new) |  |
| 2.0 | 2025-08-30 |  |  |  |  |
| 1.0 | 2025-05-04 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Quirky+<version>&body=###%20Engine%20name%0AQuirky%0A%0A###%20Version%0A3.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-06 06:28:32

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0"]
  y-axis "Elo Rating" 800 --> 3300
  line "STC (8.0+0.08s)" [2947, 813]
  line "STC (8.0+0.08s)" [2947, 813]
  line "LTC (60.0+0.60s)" [3179, 2053]
  line "VLTC (2m24s+1.12s)" [3241, 1181]
  line "VLTC (2m24s+1.12s)" [3241, 1181]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1181 | 22 | 1610 | 23% | 1689 | 3% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2053 | 24 | 876 | 40% | 2192 | 2% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 813 | 37 | 388 | 48% | 964 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3241 | 22 | 564 | 54% | 3213 | 59% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 3179 | 25 | 438 | 52% | 3160 | 63% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2947 | 23 | 552 | 50% | 2928 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |