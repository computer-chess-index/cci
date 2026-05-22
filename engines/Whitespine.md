# Engine: Whitespine

Author: Miloslav Macůrek

Home: https://github.com/maelic13/whitespine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-04-29 | 672<sub>(-181) | 851<sub>(-166) | 1029<sub>(+8) |  |
| 1.3.3 | 2026-03-26 | 853<sub>(+73) | 1017<sub>(-40) | 1021<sub>(-17) |  |
| 1.3.2 | 2025-09-16 | 780<sub>(+new) | 1057<sub>(+new) | 1038<sub>(+new) |  |
| 1.3.1 | 2025-06-08 |  |  |  |  |
| 1.3.0 | 2025-05-11 |  |  |  |  |
| 1.2.0 | 2025-05-11 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Whitespine+<version>&body=###%20Engine%20name%0AWhitespine%0A%0A###%20Version%0A1.4.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-22 06:31:04

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.2", "1.3.3", "1.4.0"]
  y-axis "Elo Rating" 600 --> 1100
  line "STC (8.0+0.08s)" [780, 853, 672]
  line "STC (8.0+0.08s)" [780, 853, 672]
  line "LTC (60.0+0.60s)" [1057, 1017, 851]
  line "VLTC (2m24s+1.12s)" [1038, 1021, 1029]
  line "VLTC (2m24s+1.12s)" [1038, 1021, 1029]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1029 | 64 | 130 | 47% | 992 | 15% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 851 | 70 | 122 | 41% | 933 | 9% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 672 | 75 | 114 | 35% | 892 | 6% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 1021 | 62 | 140 | 49% | 981 | 13% |
| 1.3.3 | LTC <sub>(60.0+0.60s)</sub> | 1017 | 64 | 136 | 46% | 1003 | 12% |
| 1.3.3 | STC <sub>(8.0+0.08s)</sub> | 853 | 73 | 116 | 42% | 932 | 10% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 1038 | 75 | 106 | 44% | 1156 | 13% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 1057 | 85 | 92 | 42% | 1183 | 12% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 780 | 103 | 76 | 37% | 1053 | 11% |
| --- | --- | --- | --- | --- | --- | --- | --- |