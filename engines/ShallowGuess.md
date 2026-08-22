# Engine: ShallowGuess

Author: Zixiao Han

Home: https://github.com/buildingwheels/ShallowGuess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-03-25 | 2287<sub>(-38) | 2716<sub>(+62) | 2905<sub>(+166) |  |
| 1.0.0 | 2026-02-24 | 2325 | 2654 | 2739 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+ShallowGuess+<version>&body=###%20Engine%20name%0AShallowGuess%0A%0A###%20Version%0A1.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-22 06:29:53

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0"]
  y-axis "Elo Rating" 2200 --> 3000
  line "STC (8.0+0.08s)" [2325, 2287]
  line "STC (8.0+0.08s)" [2325, 2287]
  line "LTC (60.0+0.60s)" [2654, 2716]
  line "VLTC (2m24s+1.12s)" [2739, 2905]
  line "VLTC (2m24s+1.12s)" [2739, 2905]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2905 | 55 | 98 | 54% | 2877 | 42% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2716 | 56 | 92 | 51% | 2705 | 48% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2287 | 66 | 80 | 53% | 2260 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2739 | 33 | 284 | 49% | 2754 | 40% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2654 | 34 | 286 | 51% | 2654 | 35% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2325 | 35 | 290 | 48% | 2352 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |