# Engine: Chess3

Author: Paul Sonkoly

Home: https://github.com/paulsonkoly/chess-3

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-04-02 | 2558<sub>(+38) | 2863<sub>(+59) | 2934<sub>(+85) |  |
| 3.0 | 2026-01-17 | 2520<sub>(+new) | 2804<sub>(+new) | 2849<sub>(+new) |  |
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

Generated: 2026-05-06 06:23:29

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0"]
  y-axis "Elo Rating" 2500 --> 3000
  line "STC (8.0+0.08s)" [2520, 2558]
  line "STC (8.0+0.08s)" [2520, 2558]
  line "LTC (60.0+0.60s)" [2804, 2863]
  line "VLTC (2m24s+1.12s)" [2849, 2934]
  line "VLTC (2m24s+1.12s)" [2849, 2934]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2934 | 29 | 378 | 52% | 2913 | 40% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 2863 | 29 | 374 | 52% | 2847 | 37% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 2558 | 29 | 396 | 51% | 2552 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2849 | 32 | 316 | 49% | 2862 | 34% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2804 | 32 | 320 | 50% | 2800 | 35% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2520 | 27 | 440 | 49% | 2526 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |