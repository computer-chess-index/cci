# Engine: Cinder

Author: Bruno Dutra

Home: https://github.com/brunocodutra/cinder

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.2 | 2026-07-12 | 3367<sub>(+22) | 3517<sub>(0) | 3553<sub>(+1) |  |
| 0.5.1 | 2026-07-08 | 3345<sub>(-42) | 3517<sub>(+3) | 3552<sub>(-15) |  |
| 0.5.0 | 2026-07-04 | 3387<sub>(+50) | 3514<sub>(+53) | 3567<sub>(+75) |  |
| 0.4.1 | 2025-12-05 | 3337<sub>(+42) | 3461<sub>(-3) | 3492<sub>(-19) |  |
| 0.4.0 | 2025-12-04 | 3295<sub>(+new) | 3464<sub>(+new) | 3511<sub>(+new) |  |
| 0.3.1 | 2025-08-16 |  |  |  |  |
| 0.3.0 | 2025-08-16 |  |  |  |  |
| 0.2.0 | 2025-05-29 |  |  |  |  |
| 0.1.4 | 2025-04-10 |  |  |  |  |
| 0.1.3 | 2025-02-28 |  |  |  |  |
| 0.1.2 | 2025-02-25 |  |  |  |  |
| 0.1.1 | 2025-02-23 |  |  |  |  |
| 0.1.0 | 2025-02-23 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Cinder+<version>&body=###%20Engine%20name%0ACinder%0A%0A###%20Version%0A0.5.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-16 06:23:41

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.4.1", "0.5.0", "0.5.1", "0.5.2"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3295, 3337, 3387, 3345, 3367]
  line "STC (8.0+0.08s)" [3295, 3337, 3387, 3345, 3367]
  line "LTC (60.0+0.60s)" [3464, 3461, 3514, 3517, 3517]
  line "VLTC (2m24s+1.12s)" [3511, 3492, 3567, 3552, 3553]
  line "VLTC (2m24s+1.12s)" [3511, 3492, 3567, 3552, 3553]
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
  x-axis ["0.4.0", "0.4.1", "0.5.0", "0.5.1", "0.5.2"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3295, 3337, 3387, 3345, 3367]
  line "STC (8.0+0.08s)" [3295, 3337, 3387, 3345, 3367]
  line "LTC (60.0+0.60s)" [3464, 3461, 3514, 3517, 3517]
  line "VLTC (2m24s+1.12s)" [3511, 3492, 3567, 3552, 3553]
  line "VLTC (2m24s+1.12s)" [3511, 3492, 3567, 3552, 3553]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3553 | 48 | 98 | 49% | 3556 | 91% |
| 0.5.2 | LTC <sub>(60.0+0.60s)</sub> | 3517 | 38 | 154 | 52% | 3506 | 92% |
| 0.5.2 | STC <sub>(8.0+0.08s)</sub> | 3367 | 35 | 194 | 47% | 3386 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3552 | 39 | 152 | 49% | 3559 | 89% |
| 0.5.1 | LTC <sub>(60.0+0.60s)</sub> | 3517 | 43 | 120 | 50% | 3517 | 93% |
| 0.5.1 | STC <sub>(8.0+0.08s)</sub> | 3345 | 44 | 124 | 49% | 3352 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3567 | 44 | 118 | 50% | 3564 | 89% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3514 | 44 | 120 | 52% | 3502 | 85% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 3387 | 35 | 192 | 48% | 3399 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3492 | 23 | 424 | 50% | 3491 | 86% |
| 0.4.1 | LTC <sub>(60.0+0.60s)</sub> | 3461 | 25 | 368 | 50% | 3461 | 86% |
| 0.4.1 | STC <sub>(8.0+0.08s)</sub> | 3337 | 21 | 564 | 49% | 3344 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3511 | 43 | 128 | 54% | 3476 | 82% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3464 | 50 | 108 | 56% | 3360 | 71% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 3295 | 68 | 72 | 65% | 3048 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |