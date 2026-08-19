# Engine: Tunguska

Author: Fernando Tenorio

Home: https://github.com/fernandotenorio/Tunguska

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-04-08 | 2808<sub>(+312) | 3140<sub>(+298) | 3205<sub>(+284) |  |
| 2.0 | 2026-03-18 | 2496 | 2842 | 2921 |  |
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

Generated: 2026-08-19 06:31:44

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1"]
  y-axis "Elo Rating" 2400 --> 3300
  line "STC (8.0+0.08s)" [2496, 2808]
  line "STC (8.0+0.08s)" [2496, 2808]
  line "LTC (60.0+0.60s)" [2842, 3140]
  line "VLTC (2m24s+1.12s)" [2921, 3205]
  line "VLTC (2m24s+1.12s)" [2921, 3205]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3205 | 24 | 472 | 50% | 3201 | 58% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 3140 | 25 | 434 | 52% | 3120 | 58% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2808 | 24 | 516 | 48% | 2824 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2921 | 30 | 356 | 51% | 2905 | 37% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2842 | 31 | 328 | 50% | 2834 | 36% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2496 | 31 | 368 | 50% | 2489 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |