# Engine: Quirky

Author: Anton Kernozhitsky

Home: https://github.com/Wind-Eagle/Quirky

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-05-16 | 865<sub>(-2089) | 2074<sub>(-1113) | 1196<sub>(-2053) |  |
| 2.1 | 2025-11-25 | 2954 | 3187 | 3249 |  |
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

Generated: 2026-08-23 06:27:57

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0"]
  y-axis "Elo Rating" 800 --> 3300
  line "STC (8.0+0.08s)" [2954, 865]
  line "STC (8.0+0.08s)" [2954, 865]
  line "LTC (60.0+0.60s)" [3187, 2074]
  line "VLTC (2m24s+1.12s)" [3249, 1196]
  line "VLTC (2m24s+1.12s)" [3249, 1196]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1196 | 22 | 1626 | 23% | 1690 | 3% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2074 | 23 | 892 | 41% | 2199 | 2% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 865 | 36 | 432 | 52% | 940 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3249 | 22 | 564 | 54% | 3221 | 59% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 3187 | 25 | 438 | 52% | 3168 | 63% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2954 | 23 | 552 | 50% | 2935 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |