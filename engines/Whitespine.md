# Engine: Whitespine

Author: Miloslav Macůrek

Home: https://github.com/maelic13/whitespine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-04-29 | 689<sub>(-163) | 868<sub>(-143) | 1008<sub>(-9) |  |
| 1.3.3 | 2026-03-26 | 852<sub>(+70) | 1011<sub>(-41) | 1017<sub>(-17) |  |
| 1.3.2 | 2025-09-16 | 782<sub>(+new) | 1052<sub>(+new) | 1034<sub>(+new) |  |
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

Generated: 2026-07-17 06:31:19

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.2", "1.3.3", "1.4.0"]
  y-axis "Elo Rating" 600 --> 1100
  line "STC (8.0+0.08s)" [782, 852, 689]
  line "STC (8.0+0.08s)" [782, 852, 689]
  line "LTC (60.0+0.60s)" [1052, 1011, 868]
  line "VLTC (2m24s+1.12s)" [1034, 1017, 1008]
  line "VLTC (2m24s+1.12s)" [1034, 1017, 1008]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.2", "1.3.3", "1.4.0"]
  y-axis "Elo Rating" 600 --> 1100
  line "STC (8.0+0.08s)" [782, 852, 689]
  line "STC (8.0+0.08s)" [782, 852, 689]
  line "LTC (60.0+0.60s)" [1052, 1011, 868]
  line "VLTC (2m24s+1.12s)" [1034, 1017, 1008]
  line "VLTC (2m24s+1.12s)" [1034, 1017, 1008]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1008 | 61 | 142 | 49% | 964 | 15% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 868 | 64 | 134 | 45% | 909 | 11% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 689 | 67 | 126 | 37% | 872 | 9% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 1017 | 61 | 140 | 49% | 979 | 13% |
| 1.3.3 | LTC <sub>(60.0+0.60s)</sub> | 1011 | 64 | 136 | 46% | 1002 | 12% |
| 1.3.3 | STC <sub>(8.0+0.08s)</sub> | 852 | 72 | 116 | 42% | 930 | 10% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 1034 | 75 | 106 | 44% | 1154 | 13% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 1052 | 85 | 92 | 42% | 1181 | 12% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 782 | 102 | 76 | 37% | 1052 | 11% |
| --- | --- | --- | --- | --- | --- | --- | --- |