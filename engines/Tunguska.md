# Engine: Tunguska

Author: Fernando Tenorio

Home: https://github.com/fernandotenorio/Tunguska

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-04-08 | 2811<sub>(+315) | 3127<sub>(+291) | 3197<sub>(+281) |  |
| 2.0 | 2026-03-18 | 2496 | 2836 | 2916 |  |
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

Generated: 2026-05-20 06:29:57

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1"]
  y-axis "Elo Rating" 2400 --> 3200
  line "STC (8.0+0.08s)" [2496, 2811]
  line "STC (8.0+0.08s)" [2496, 2811]
  line "LTC (60.0+0.60s)" [2836, 3127]
  line "VLTC (2m24s+1.12s)" [2916, 3197]
  line "VLTC (2m24s+1.12s)" [2916, 3197]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3197 | 28 | 348 | 51% | 3185 | 59% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 3127 | 28 | 346 | 52% | 3112 | 60% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2811 | 29 | 352 | 48% | 2820 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2916 | 30 | 356 | 51% | 2900 | 37% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2836 | 31 | 328 | 50% | 2830 | 36% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2496 | 31 | 368 | 50% | 2489 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |