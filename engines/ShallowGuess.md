# Engine: ShallowGuess

Author: Zixiao Han

Home: https://github.com/buildingwheels/ShallowGuess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-03-25 | 2291<sub>(-38) | 2722<sub>(+62) | 2909<sub>(+166) |  |
| 1.0.0 | 2026-02-24 | 2329 | 2660 | 2743 |  |
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

Generated: 2026-09-06 04:39:00

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0"]
  y-axis "Elo Rating" 2200 --> 3000
  line "" [2329, 2291]
  line "STC (8.0+0.08s)" [2329, 2291]
  line "LTC (60.0+0.60s)" [2660, 2722]
  line "" [2743, 2909]
  line "VLTC (2m24s+1.12s)" [2743, 2909]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2909 | 55 | 98 | 54% | 2882 | 42% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2722 | 56 | 92 | 51% | 2711 | 48% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2291 | 66 | 80 | 53% | 2264 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2743 | 33 | 284 | 49% | 2758 | 40% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2660 | 34 | 286 | 51% | 2660 | 35% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2329 | 35 | 290 | 48% | 2356 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |