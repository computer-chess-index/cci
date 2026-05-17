# Engine: Tunguska

Author: Fernando Tenorio

Home: https://github.com/fernandotenorio/Tunguska

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-04-08 | 2880<sub>(+323) | 3190<sub>(+289) | 3258<sub>(+277) |  |
| 2.0 | 2026-03-18 | 2557 | 2901 | 2981 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Tunguska+<version>&body=###%20Engine%20name%0ATunguska%0A%0A###%20Version%0A2.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-17 06:29:18

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1"]
  y-axis "Elo Rating" 2500 --> 3300
  line "STC (8.0+0.08s)" [2557, 2880]
  line "STC (8.0+0.08s)" [2557, 2880]
  line "LTC (60.0+0.60s)" [2901, 3190]
  line "VLTC (2m24s+1.12s)" [2981, 3258]
  line "VLTC (2m24s+1.12s)" [2981, 3258]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3258 | 28 | 336 | 51% | 3248 | 59% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 3190 | 29 | 330 | 52% | 3175 | 60% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2880 | 30 | 328 | 48% | 2892 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2981 | 30 | 356 | 51% | 2965 | 37% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2901 | 31 | 328 | 50% | 2893 | 36% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2557 | 31 | 368 | 50% | 2550 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |