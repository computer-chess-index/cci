# Engine: Tunguska

Author: Fernando Tenorio

Home: https://github.com/fernandotenorio/Tunguska

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-04-08 | 2805<sub>(+310) | 3136<sub>(+297) | 3205<sub>(+286) |  |
| 2.0 | 2026-03-18 | 2495 | 2839 | 2919 |  |
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

Generated: 2026-08-10 07:07:56

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1"]
  y-axis "Elo Rating" 2400 --> 3300
  line "STC (8.0+0.08s)" [2495, 2805]
  line "STC (8.0+0.08s)" [2495, 2805]
  line "LTC (60.0+0.60s)" [2839, 3136]
  line "VLTC (2m24s+1.12s)" [2919, 3205]
  line "VLTC (2m24s+1.12s)" [2919, 3205]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3205 | 24 | 464 | 51% | 3198 | 59% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 3136 | 26 | 418 | 52% | 3116 | 59% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2805 | 24 | 508 | 48% | 2822 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2919 | 30 | 356 | 51% | 2904 | 37% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2839 | 31 | 328 | 50% | 2832 | 36% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2495 | 31 | 368 | 50% | 2488 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |