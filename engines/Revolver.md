# Engine: Revolver

Author: Deshawn Mohan-Smith

Home: https://github.com/GoldenRare/Revolver

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-05-01 | 2560<sub>(+251) | 2834<sub>(+280) | 2867<sub>(+253) |  |
| 1.0 | 2026-01-01 | 2309 | 2554 | 2614 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Revolver+<version>&body=###%20Engine%20name%0ARevolver%0A%0A###%20Version%0A2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-14 06:27:45

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2300 --> 2900
  line "STC (8.0+0.08s)" [2309, 2560]
  line "STC (8.0+0.08s)" [2309, 2560]
  line "LTC (60.0+0.60s)" [2554, 2834]
  line "VLTC (2m24s+1.12s)" [2614, 2867]
  line "VLTC (2m24s+1.12s)" [2614, 2867]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2867 | 32 | 304 | 53% | 2843 | 39% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2834 | 30 | 340 | 53% | 2803 | 39% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2560 | 33 | 300 | 50% | 2561 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2614 | 27 | 450 | 46% | 2655 | 32% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2554 | 29 | 408 | 49% | 2565 | 25% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2309 | 26 | 516 | 51% | 2295 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |