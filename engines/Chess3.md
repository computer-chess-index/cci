# Engine: Chess3

Author: Paul Sonkoly

Home: https://github.com/paulsonkoly/chess-3

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-04-02 | 2498<sub>(+36) | 2800<sub>(+55) | 2877<sub>(+88) |  |
| 3.0 | 2026-01-17 | 2462<sub>(+new) | 2745<sub>(+new) | 2789<sub>(+new) |  |
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

Generated: 2026-05-20 06:23:34

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0"]
  y-axis "Elo Rating" 2400 --> 2900
  line "STC (8.0+0.08s)" [2462, 2498]
  line "STC (8.0+0.08s)" [2462, 2498]
  line "LTC (60.0+0.60s)" [2745, 2800]
  line "VLTC (2m24s+1.12s)" [2789, 2877]
  line "VLTC (2m24s+1.12s)" [2789, 2877]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2877 | 28 | 398 | 52% | 2855 | 39% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 2800 | 28 | 402 | 51% | 2790 | 36% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 2498 | 28 | 420 | 50% | 2493 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2789 | 32 | 316 | 49% | 2801 | 34% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2745 | 32 | 320 | 50% | 2741 | 35% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2462 | 27 | 440 | 49% | 2468 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |