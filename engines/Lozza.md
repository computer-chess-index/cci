# Engine: Lozza

Author: Colin Jenkins

Home: https://github.com/op12no2/lozza

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6 | 2026-02-13 |  |  |  |  |
| 2 | 2026-02-13 |  |  |  |  |
| 10 | 2026-01-17 | 2851<sub>(+248) | 3073<sub>(+179) | 3112<sub>(+122) |  |
| 9 | 2026-01-10 | 2603<sub>(+18) | 2894<sub>(-14) | 2990<sub>(-34) |  |
| 8 | 2025-09-25 | 2585<sub>(+new) | 2908<sub>(+new) | 3024<sub>(+new) |  |
| 7 | 2025-07-12 |  |  |  |  |
| 5.1 | 2025-06-02 |  |  |  |  |
| 5 | 2025-02-25 |  |  |  |  |
| 4 | 2025-01-06 |  |  |  |  |
| 3 | 2024-10-06 |  |  |  |  |
| 2.5 | 2023-02-10 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lozza+<version>&body=###%20Engine%20name%0ALozza%0A%0A###%20Version%0A6" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-14 06:26:22

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8", "9", "10"]
  y-axis "Elo Rating" 2500 --> 3200
  line "STC (8.0+0.08s)" [2585, 2603, 2851]
  line "STC (8.0+0.08s)" [2585, 2603, 2851]
  line "LTC (60.0+0.60s)" [2908, 2894, 3073]
  line "VLTC (2m24s+1.12s)" [3024, 2990, 3112]
  line "VLTC (2m24s+1.12s)" [3024, 2990, 3112]
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
  x-axis ["8", "9", "10"]
  y-axis "Elo Rating" 2500 --> 3200
  line "STC (8.0+0.08s)" [2585, 2603, 2851]
  line "STC (8.0+0.08s)" [2585, 2603, 2851]
  line "LTC (60.0+0.60s)" [2908, 2894, 3073]
  line "VLTC (2m24s+1.12s)" [3024, 2990, 3112]
  line "VLTC (2m24s+1.12s)" [3024, 2990, 3112]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | VLTC <sub>(2m24s+1.12s)</sub> | 3112 | 26 | 432 | 51% | 3104 | 50% |
| 10 | LTC <sub>(60.0+0.60s)</sub> | 3073 | 26 | 420 | 52% | 3048 | 50% |
| 10 | STC <sub>(8.0+0.08s)</sub> | 2851 | 22 | 624 | 48% | 2859 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | 2990 | 36 | 216 | 51% | 2981 | 52% |
| 9 | LTC <sub>(60.0+0.60s)</sub> | 2894 | 40 | 182 | 48% | 2912 | 46% |
| 9 | STC <sub>(8.0+0.08s)</sub> | 2603 | 49 | 128 | 50% | 2604 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | VLTC <sub>(2m24s+1.12s)</sub> | 3024 | 38 | 198 | 51% | 3015 | 50% |
| 8 | LTC <sub>(60.0+0.60s)</sub> | 2908 | 37 | 208 | 52% | 2889 | 52% |
| 8 | STC <sub>(8.0+0.08s)</sub> | 2585 | 43 | 176 | 51% | 2576 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |