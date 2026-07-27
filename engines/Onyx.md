# Engine: Onyx

Author: Dylan Hogarth

Home: https://github.com/dylan2554/onyx

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-07-12 | 2893<sub>(+275) | 3150<sub>(+229) | 3212<sub>(+201) |  |
| 1.6 | 2026-06-13 | 2618 | 2921 | 3011 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Onyx+<version>&body=###%20Engine%20name%0AOnyx%0A%0A###%20Version%0A2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-27 06:27:33

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "2.0"]
  y-axis "Elo Rating" 2600 --> 3300
  line "STC (8.0+0.08s)" [2618, 2893]
  line "STC (8.0+0.08s)" [2618, 2893]
  line "LTC (60.0+0.60s)" [2921, 3150]
  line "VLTC (2m24s+1.12s)" [3011, 3212]
  line "VLTC (2m24s+1.12s)" [3011, 3212]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3212 | 34 | 232 | 49% | 3217 | 60% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 3150 | 34 | 250 | 50% | 3148 | 52% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2893 | 36 | 238 | 52% | 2877 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 3011 | 32 | 296 | 48% | 3025 | 40% |
| 1.6 | LTC <sub>(60.0+0.60s)</sub> | 2921 | 34 | 264 | 46% | 2954 | 41% |
| 1.6 | STC <sub>(8.0+0.08s)</sub> | 2618 | 34 | 276 | 50% | 2623 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |