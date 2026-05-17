# Engine: Chess3

Author: Paul Sonkoly

Home: https://github.com/paulsonkoly/chess-3

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-04-02 | 2560<sub>(+37) | 2866<sub>(+58) | 2936<sub>(+83) |  |
| 3.0 | 2026-01-17 | 2523<sub>(+new) | 2808<sub>(+new) | 2853<sub>(+new) |  |
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

Generated: 2026-05-17 06:23:22

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0"]
  y-axis "Elo Rating" 2500 --> 3000
  line "STC (8.0+0.08s)" [2523, 2560]
  line "STC (8.0+0.08s)" [2523, 2560]
  line "LTC (60.0+0.60s)" [2808, 2866]
  line "VLTC (2m24s+1.12s)" [2853, 2936]
  line "VLTC (2m24s+1.12s)" [2853, 2936]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2936 | 28 | 386 | 52% | 2919 | 40% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 2866 | 28 | 394 | 51% | 2854 | 37% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 2560 | 28 | 412 | 50% | 2556 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2853 | 32 | 316 | 49% | 2866 | 34% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2808 | 32 | 320 | 50% | 2804 | 35% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2523 | 27 | 440 | 49% | 2529 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |