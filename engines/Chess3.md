# Engine: Chess3

Author: Paul Sonkoly

Home: https://github.com/paulsonkoly/chess-3

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-04-02 | 2557<sub>(+38) | 2862<sub>(+59) | 2931<sub>(+84) |  |
| 3.0 | 2026-01-17 | 2519<sub>(+new) | 2803<sub>(+new) | 2847<sub>(+new) |  |
| 2.0 | 2025-08-14 |  |  |  |  |
| 1.0 | 2025-05-15 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chess3+<version>&body=###%20Engine%20name%0AChess3%0A%0A###%20Version%0A4.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-04 06:23:24

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0"]
  y-axis "Elo Rating" 2500 --> 3000
  line "STC (8.0+0.08s)" [2519, 2557]
  line "STC (8.0+0.08s)" [2519, 2557]
  line "LTC (60.0+0.60s)" [2803, 2862]
  line "VLTC (2m24s+1.12s)" [2847, 2931]
  line "VLTC (2m24s+1.12s)" [2847, 2931]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2931 | 29 | 378 | 52% | 2912 | 40% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 2862 | 29 | 370 | 52% | 2846 | 37% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 2557 | 29 | 396 | 51% | 2550 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2847 | 32 | 316 | 49% | 2861 | 34% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2803 | 32 | 320 | 50% | 2799 | 35% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2519 | 27 | 440 | 49% | 2525 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |